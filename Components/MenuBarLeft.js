import React, { useState } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import Svg, { G, Circle, Rect, BoxShadow } from "react-native-svg";

const MenuBarLeft = () => {
  const [fadeAnim] = useState(new Animated.Value(1)); // Initial value for opacity: 0
  //const [translateXAnim] = useState(new Animated.Value(0));
  //const [scaleAnim] = useState(new Animated.Value(1)); // Initial value for
  const [anim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 4000,
      }),
      //Animated.timing(translateXAnim, { toValue: 100, duration: 2000 }),
      //Animated.timing(scaleAnim, { toValue: 0, duration: 1000 }),
      Animated.timing(anim, {
        toValue: 1,
        duration: 4000,
        easing: Easing.ease,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...styles.fadingContainer,
        opacity: fadeAnim, // Bind opacity to animated value
        transform: [
          {
            translateX: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 100],
            }),
          },
        ],
      }}
    >
      <Svg
        id="e7pCoJ20XgI1"
        xmlns="http://www.w3.org/2000/svg"
        //xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 764.7 235.1"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <rect
          width="263.702614"
          height="94.807368"
          rx="47.4"
          ry="47.4"
          transform="matrix(1.096089 0 0 1.046844 56.7 68.475211)"
          fill="#fff"
          strokeWidth="0"
        />
        <path
          d="M132.6,137.8v-7.6c0-4.7,3.6-8.6,8-8.6h.2c4.3,0,7.9,3.9,7.9,8.6v7.6"
          transform="translate(5.064591-4.05)"
          fill="none"
          stroke="#bcbebe"
          strokeWidth="7"
          strokeMiterlimit="10"
        />
        <path
          d="M273,107.7h-10.4l1.5-12.4v-.2c.05934-.903785-.60033-1.695389-1.5-1.8-.477961-.056096-.958481.081537-1.334267.382166s-.615542.739217-.665733,1.217834l-1.7,12.8h-15.3l1.6-12.4v-.2c.005701-.920972-.684711-1.697685-1.6-1.8-.477961-.056096-.958481.081537-1.334267.382166s-.615542.739217-.665733,1.217834L240,107.7h-10.7c-1.173732.094341-2.105659,1.026268-2.2,2.2c0,1.215026.984974,2.2,2.2,2.2h10.1l-1.5,12.4h-11c-1.173732.094341-2.105659,1.026268-2.2,2.2c0,1.215026.984974,2.2,2.2,2.2h10.4l-1.7,13.4c-.110457.994113.605887,1.889543,1.6,2s1.889543-.605887,2-1.6l1.7-13.8h15.4l-1.7,13.4c-.12002.961788.543078,1.845918,1.5,2c1.002581.070061,1.90144-.614784,2.1-1.6l1.7-13.8h10.7c.574751-.018122,1.116928-.271138,1.5-.7.40203-.393383.619826-.937874.6-1.5.027368-.57407-.181739-1.134272-.578571-1.55s-.946707-.650652-1.521429-.65h-10.2l1.6-12.4h11c.574751-.018122,1.116928-.271138,1.5-.7.40203-.393383.619826-.937874.6-1.5.027368-.57407-.181739-1.134272-.578571-1.55s-.946707-.650652-1.521429-.65Zm-16.2,16.8h-15.3l1.6-12.4h15.3Z"
          transform="translate(0-.7)"
          fill="#bcbcbd"
        />
      </Svg>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  fadingContainer: {
    width: 400,
    height: 400,
    position: "relative",
  },
});

export default MenuBarLeft;
