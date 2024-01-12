import { Image, StyleSheet, Text, View } from 'react-native'
import React, { ReactElement } from 'react'
import { BORDERRADIUS, SPACING } from '../theme/theme'

const ImageBox = ({ boxData }: any): ReactElement => {

    let sideImageSource;

    switch (boxData?.nationality) {
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
        <View style={styles.Wrapper}>
            {boxData?.profile && <Image resizeMode='cover' style={styles.MainImage} source={boxData?.profile} />}
            <Image resizeMode='cover' style={styles.SideImage} source={sideImageSource} />
        </View>
    )
}

export default ImageBox

const styles = StyleSheet.create({
    Wrapper: {
        position: "relative",
        alignSelf: "center"
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
    }
})