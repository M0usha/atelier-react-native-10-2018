import React from 'react'
import { View, StyleSheet } from 'react-native'
import OptionMenu from './OptionMenu'

/**
 * Composant Menu.
 */
const Menu = ({changeFilter}) => (
    <View style={styles.menu}>
        <OptionMenu titre="Toutes" changeFilter={changeFilter}/>
        <OptionMenu titre="Actives" changeFilter={changeFilter}/>
        <OptionMenu titre="Terminées" changeFilter={changeFilter}/>
    </View>
)

const styles = StyleSheet.create({
    menu: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})
export default Menu