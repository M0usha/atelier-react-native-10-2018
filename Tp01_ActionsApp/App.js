import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import Entete from './src/Entete'
import Saisie from './src/Saisie'
import BoutonCreer from './src/BoutonCreer'
import ListeActions from './src/action/ListeActions'
import Menu from './src/menu/Menu'

/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {

    // état global de l'application
    // il y aura probalement d'autres informations à stocker
    state = {
        texteSaisie: '',
        actions: [],
        currentFilter: 'Toutes'
    }

    /**
     * Méthode invoquée lorsque que la saisie change.
     *
     * @param nouvelleSaisie la valeur saisie
     */
    quandLaSaisieChange(nouvelleSaisie) {
        console.log('la saisie à changée', nouvelleSaisie)
        this.setState({texteSaisie: nouvelleSaisie})
    }

    supprimerAction(index) {
        console.log("remove");
        var array = [...this.state.actions];
        
        array.splice(index, 1);
        this.setState({actions: array});
    }

    changerTermine(index) {
        console.log("change");
        var array = [...this.state.actions];
        array.filter(action => action.index === index).forEach(action => action.termine = !action.termine);
        this.setState({actions: array});
}


    /**
     * Méthode invoquée lors du clic sur le bouton `Valider`.
     */
    validerNouvelleAction() {
        console.log('Vous avez cliqué sur Valider !')
        const actionsTmp = [...this.state.actions,{titre: this.state.texteSaisie, termine: false, index: this.state.actions.length}]
        this.setState({texteSaisie: '', actions: actionsTmp})
    }

    changeFilter(newFilter) {
        this.setState({currentFilter: newFilter});
    }

    render() {
        const {texteSaisie,actions, currentFilter} = this.state

        return (
            <View style={styles.conteneur}>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <Entete/>
                    <Saisie texteSaisie={texteSaisie} evtTexteModifie={(titre) => this.quandLaSaisieChange(titre)}/>
                    <ListeActions actions={actions}
                    supprimerAction={ind => this.supprimerAction(ind)}
                    changerTermine={ind => this.changerTermine(ind)}
                    currentFilter={currentFilter}
                    />
                    <BoutonCreer onValider={() => this.validerNouvelleAction()}/>
                </ScrollView>
                <Menu changeFilter={ind => this.changeFilter(ind)} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteneur: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        paddingTop: 60,
    },
})