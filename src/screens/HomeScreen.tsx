import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactElement } from 'react'
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../theme/theme'
import { ROUTES } from '../navigators/ROUTES'

const HomeScreen = ({ navigation }: any): ReactElement => {
    return (
        <View style={styles.Container}>
            <Text>Screens</Text>
            <TouchableOpacity style={styles.Button}
                onPress={() => navigation.navigate(ROUTES.MINIMAL, {
                    screen: 'Minimal',
                })}
            >
                <Text style={styles.Text}>Mininal Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}
                onPress={() => navigation.navigate(ROUTES.ADVANCED, {
                    screen: 'Advanced',
                })}
            >
                <Text style={styles.Text}>Advanced Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    Button: {
        backgroundColor: COLORS.primary,
        paddingVertical: SPACING.space_10,
        paddingHorizontal: SPACING.space_15,
        borderRadius: BORDERRADIUS.radius_15,
        marginVertical: SPACING.space_10
    },
    Text: {
        color: COLORS.light,
        fontSize: FONTSIZE.size_20
    }
})