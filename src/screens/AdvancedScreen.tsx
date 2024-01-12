import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { ReactElement, useState } from 'react';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../theme/theme';
import ImageBox from '../components/ImageBox';
import Card from '../components/Card';
import Header from '../components/Header';
import { FlashList } from '@shopify/flash-list';
import { leaders } from '../data/leaders';
import { ROUTES } from '../navigators/ROUTES';
import LeaderBox from '../components/LeaderBox';

const AdvancedScreen = ({ navigation, route }: any): ReactElement => {
    const [leadersData, setLeadersData] = useState(leaders.sort((a, b) => (b.points - a.points)).slice(3))
    const [topLeadersData, setTopLeadersData] = useState(leaders.sort((a, b) => (b.points - a.points)).slice(0, 3))
    const [active, setActive] = useState<boolean>(true);
    //swatcher function
    const handleSwatch = (data: string) => {
        if (data === "All" && active) return;
        if (data === "Weakly" && !active) return;
        setActive(!active);
        if (data === "Weakly") {
            const sortedLeader = leaders.filter((leader) => leader.time === data).sort((a, b) => b.points - a.points)
            setTopLeadersData(sortedLeader.slice(0, 3));
            setLeadersData(sortedLeader.slice(3));
        } else {
            const allLeaders = leaders.sort((a, b) => b.points - a.points)
            setTopLeadersData(allLeaders.slice(0, 3));
            setLeadersData(allLeaders.slice(3));
        }
    };
    return (
        <>
            <StatusBar backgroundColor={COLORS.primary} barStyle={"light-content"} />
            <SafeAreaView style={styles.ScreenContainer}>
                <View style={styles.Wrapper}>
                    <TouchableOpacity style={styles.Back} onPress={() => navigation.goBack()}>
                        <Image style={styles.Image} source={require("../../assets/images/arrow.png")} />
                    </TouchableOpacity>
                    <Text style={styles.Text}>{route.params.screen} Leaderboard</Text>
                    <View></View>
                </View>
                <View style={styles.Swatcher}>
                    <TouchableOpacity
                        style={!active ? styles.SwatchButton : styles.SwatchButtonNoBg}
                        onPress={() => handleSwatch("Weakly")}
                    >
                        <Text style={styles.ButtonText}>Weakly</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={active ? styles.SwatchButton : styles.SwatchButtonNoBg}
                        onPress={() => handleSwatch("All")}
                    >
                        <Text style={styles.ButtonText}>All Time</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.WinnerBOx}>

                    <LeaderBox item={topLeadersData[1]} index={2} />
                    <LeaderBox item={topLeadersData[0]} index={1} />
                    <LeaderBox item={topLeadersData[2]} index={3} />

                </View>
                <View style={styles.LeaderContainer}>
                    <FlashList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return < Card leader={item} index={index + 3} />;
                        }}
                        estimatedItemSize={100}
                        data={leadersData}
                    />
                </View>
                <Card />
            </SafeAreaView>
        </>
    );
};

export default AdvancedScreen;

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.primary,
        paddingHorizontal: SPACING.space_12,
        paddingTop: SPACING.space_36
    },
    Swatcher: {
        height: SPACING.space_32 * 2,
        backgroundColor: COLORS.lightPrimary,
        borderRadius: BORDERRADIUS.radius_25 * 2,
        justifyContent: "space-between",
        paddingHorizontal: SPACING.space_10,
        flexDirection: "row",
        alignItems: "center",

    },
    SwatchButton: {
        backgroundColor: COLORS.primary,
        width: "45%",
        height: SPACING.space_32 * 2 - 10,
        borderRadius: BORDERRADIUS.radius_25 * 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    SwatchButtonNoBg: {
        backgroundColor: "transparent",
        width: "45%",
        height: SPACING.space_32 * 2 - 10,
        borderRadius: BORDERRADIUS.radius_25 * 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    ButtonText: {
        color: "white",
        fontSize: FONTSIZE.size_24,
        fontWeight: "800"
    },
    LeaderContainer: {
        height: "100%",
        backgroundColor: COLORS.whiteBg,
        borderRadius: BORDERRADIUS.radius_20,
        padding: SPACING.space_12,
        paddingBottom: SPACING.space_15 * 12,
        marginBottom: SPACING.space_18 * 12
    },
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
    },
    WinnerBOx: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: SPACING.space_16 * 5,

    },
    Back: {
        padding: SPACING.space_8
    }
});

