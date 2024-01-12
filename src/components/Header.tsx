import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactElement } from 'react'
import { COLORS, FONTSIZE, SPACING } from '../theme/theme'
import { ROUTES } from '../navigators/ROUTES'

const Header = ({ navigation }: any): ReactElement => {
    return (
        <View style={styles.Wrapper}>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.HOME)}>
                <Image style={styles.Image} source={require("../../assets/images/arrow.png")} />

            </TouchableOpacity>
            <Text style={styles.Text}>Leaderboard</Text>
            <View></View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    Wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: SPACING.space_36
    },
    Text: {
        color: COLORS.light,
        textAlign: "center",
        fontSize: FONTSIZE.size_28
    },
    Image: {
        width: SPACING.space_12,
        height: SPACING.space_20,
    }
})