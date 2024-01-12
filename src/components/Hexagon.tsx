import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

interface HexagonProps {
    color: string,
    size: number
}
const Hexagon: FC<HexagonProps> = ({ size, color }) => {
    const height = (Math.sqrt(3) / 1.5) * size;

    return (
        <View style={[styles.container, { width: size, height }]}>
            <Svg height={height} width={size}>
                <Polygon
                    points={`${size / 2},0 ${size},${height / 4} ${size},${(3 * height) / 4} ${size / 2},${height} 0,${(3 * height) / 4} 0,${height / 4}`}
                    fill={color}
                />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Hexagon;
