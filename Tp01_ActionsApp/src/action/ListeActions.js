import React from 'react'
import {View, Text} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({actions, supprimerAction, changerTermine, currentFilter}) => {

    let filteredActions;

    if(currentFilter === "Actives"){
        filteredActions = actions.filter(action => !action.termine)
    }else if (currentFilter === "Terminées"){
        filteredActions = actions.filter(action => action.termine)
    }else{
        filteredActions = actions
    } 

    return (
        <View>
            {filteredActions.map((act,i)=> <UneAction key={i} action={act} supprimerAction={supprimerAction} changerTermine={changerTermine} />)}
        </View>
    )
}
export default ListeActions