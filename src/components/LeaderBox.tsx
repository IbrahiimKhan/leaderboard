import { Image, StyleSheet, Text, View } from 'react-native'
import React, { ReactElement } from 'react'
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../theme/theme'

const LeaderBox = ({ item, index }: any): ReactElement => {
    let sideImageSource;
    switch (item?.nationality) {
        case 'USA':
            sideImageSource = require("../../assets/images/usa.png");
            break;
        case 'Canada':
            sideImageSource = require("../../assets/images/canada.png");
            break;
        case 'Bangladesh':
            sideImageSource = require("../../assets/images/bangladesh.png");
            break;
        default:
            sideImageSource = require("../../assets/images/india.png");
            break;
    }
    return (
        <View >

            <View style={{ justifyContent: "flex-end", height: 270, }}>
                <View >
                    <View style={styles.MainWrapper}>
                        <View style={styles.Wrapper}>
                            <Image resizeMode='cover' style={styles.MainImage} source={item?.icon} />
                            <Image resizeMode='cover' style={[styles.SideImage]} source={sideImageSource} />
                            {index === 1 && <>
                                <View style={styles.CrownWrapper}>
                                    <Image resizeMode='contain' style={styles.Crown} source={require("../../assets/images/crown.png")} />
                                    <Image resizeMode='cover' style={styles.Hexagon} source={require("../../assets/images/heexagon.png")} />
                                </View>
                            </>}
                        </View>
                        <Text style={styles.name}>{item?.name}</Text>
                        <Text style={styles.point}>{item?.points}</Text>
                    </View>
                    <View style={[styles.Box, { ...(index == 1 && { height: 160, elevation: 5, }) }, { ...(index == 2 && { height: 120 }) }]}>
                        <Text style={styles.Position}>{index}</Text>
                    </View>
                </View>

            </View>
        </View>


    )
}

export default LeaderBox

const styles = StyleSheet.create({
    MainWrapper: {
        paddingHorizontal: SPACING.space_16,
        overflow: "hidden"

    },

    Wrapper: {
        position: "relative",
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    MainImage: {
        width: SPACING.space_32 * 1.5,
        height: SPACING.space_32 * 1.5,
        borderRadius: BORDERRADIUS.radius_25
    },
    SideImage: {
        width: SPACING.space_24,
        height: SPACING.space_24,
        borderRadius: BORDERRADIUS.radius_4,
        position: "absolute",
        bottom: -SPACING.space_8,
        right: -SPACING.space_12
    },
    name: {
        color: COLORS.light,
        fontSize: FONTSIZE.size_14,
        paddingTop: SPACING.space_16

    },
    point: {
        textAlign: "center",
        backgroundColor: COLORS.buttonColor,
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: SPACING.space_4,
        alignItems: "center",
        borderRadius: BORDERRADIUS.radius_15,
        color: COLORS.light,
        marginTop: SPACING.space_12
    },
    Box: {
        backgroundColor: COLORS.buttonColor,
        alignItems: "center",
        borderTopLeftRadius: BORDERRADIUS.radius_20,
        borderTopRightRadius: BORDERRADIUS.radius_20,
        marginTop: SPACING.space_16,
        height: 110,

    },
    Hexagon: {
        width: SPACING.space_36,
        height: SPACING.space_36
    },
    CrownWrapper: {
        position: "absolute",
        top: -SPACING.space_36,
        alignItems: "center",
        justifyContent: "center"
    },
    Crown: {
        position: "absolute",
        width: SPACING.space_24,
        height: SPACING.space_24,
        zIndex: 99
    },
    Position: {
        color: COLORS.light,
        fontSize: FONTSIZE.size_30 * 2.5,
        fontWeight: "bold"
    }
})