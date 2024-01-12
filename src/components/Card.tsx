import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC, ReactElement } from 'react'
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../theme/theme'
import ImageBox from './ImageBox'
import Hexagon from './Hexagon'

const Card = ({ leader, index }: any): ReactElement => {
    index = index + 1
    return (
        <>
            <View style={styles.Wrapper}>
                <View style={styles.TextWrapper}>
                    <Text>{index}</Text>
                </View>
                <View style={styles.Info}>
                    <View style={styles.Profile}>
                        <ImageBox boxData={{ profile: leader?.icon, nationality: leader?.nationality }} />
                    </View>
                    <View >
                        <Text style={styles.Name}>{leader?.name}</Text>
                        <Text style={styles.Point}>{leader?.points} Points</Text>
                    </View>
                </View>
                {(index === 1 || index === 2 || index === 3) ? <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Hexagon size={40} color={index === 2 ? 'gray' : index === 3 ? 'indigo' : 'yellow'} />
                    <Image source={require("../../assets/images/crown.png")} style={styles.MainImage} resizeMode='contain' />
                </View> : <View></View>}
            </View>
        </>
    )
}

export default Card

const styles = StyleSheet.create({
    Wrapper: {
        backgroundColor: COLORS.light,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: SPACING.space_20,
        borderRadius: BORDERRADIUS.radius_20,
        elevation: 1,
        shadowColor: COLORS.gray,
        marginBottom: SPACING.space_12,

    },
    TextWrapper: {
        alignItems: "center",
        justifyContent: "center",
        width: SPACING.space_32,
        height: SPACING.space_32,
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: BORDERRADIUS.radius_25,

    },
    MainImage: {
        width: SPACING.space_32,
        height: SPACING.space_32,
        borderRadius: BORDERRADIUS.radius_25,
        position: "absolute"
    },
    Info: {
        flexDirection: "row",
        alignItems: "center"
    },
    Profile: {
        marginRight: SPACING.space_36
    },
    Name: {
        fontSize: FONTSIZE.size_18,
        fontWeight: "bold",
        lineHeight: SPACING.space_28,
        color: COLORS.dark

    },
    Point: {
        fontSize: FONTSIZE.size_16
    }
})