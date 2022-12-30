// import React, { useState } from "react";
// import { View, Text, StyleSheet, Animated } from "react-native";
// import Svg, { G, Circle, Rect } from "react-native-svg";

// const MenuBar = () => {
//   const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

//   React.useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 2000,
//     }).start();
//   }, []);

//   return (
//     <Animated.View // Special animatable View
//       style={{
//         ...styles.fadingContainer,
//         opacity: fadeAnim, // Bind opacity to animated value
//       }}
//     >
//       <Svg
//         id="e0wSGZn4NVL1"
//         xmlns="http://www.w3.org/2000/svg"
//         //xmlns:xlink="http://www.w3.org/1999/xlink"
//         viewBox="0 0 764.7 235.1"
//         shapeRendering="geometricPrecision"
//         textRendering="geometricPrecision"
//       >
//         <rect
//           width="263.702614"
//           height="94.807368"
//           rx="47.4"
//           ry="47.4"
//           transform="matrix(1.096089 0 0 1.046844 56.7 68.475211)"
//           fill="#fff"
//           strokeWidth="0"
//         />
//         <rect
//           width="263.702614"
//           height="94.807368"
//           rx="47.4"
//           ry="47.4"
//           transform="matrix(1.096089 0 0 1.046844 423.935878 67.475738)"
//           fill="#fff"
//           strokeWidth="0"
//         />
//         {/* <image
//   width="512"
//   height="512"
//   xlink:href="data:image/png;base64,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"
//   preserveAspectRatio="xMidYMid meet"
//   transform="matrix(.09 0 0 0.09 116.7 93.4)"
// /> */}
//         <path
//           d="M132.6,137.8v-7.6c0-4.7,3.6-8.6,8-8.6h.2c4.3,0,7.9,3.9,7.9,8.6v7.6"
//           transform="translate(0-.7)"
//           fill="none"
//           stroke="#bcbebe"
//           strokeWidth="7"
//           strokeMiterlimit="10"
//         />
//         <path
//           d="M273,107.7h-10.4l1.5-12.4v-.2c.05934-.903785-.60033-1.695389-1.5-1.8-.477961-.056096-.958481.081537-1.334267.382166s-.615542.739217-.665733,1.217834l-1.7,12.8h-15.3l1.6-12.4v-.2c.005701-.920972-.684711-1.697685-1.6-1.8-.477961-.056096-.958481.081537-1.334267.382166s-.615542.739217-.665733,1.217834L240,107.7h-10.7c-1.173732.094341-2.105659,1.026268-2.2,2.2c0,1.215026.984974,2.2,2.2,2.2h10.1l-1.5,12.4h-11c-1.173732.094341-2.105659,1.026268-2.2,2.2c0,1.215026.984974,2.2,2.2,2.2h10.4l-1.7,13.4c-.110457.994113.605887,1.889543,1.6,2s1.889543-.605887,2-1.6l1.7-13.8h15.4l-1.7,13.4c-.12002.961788.543078,1.845918,1.5,2c1.002581.070061,1.90144-.614784,2.1-1.6l1.7-13.8h10.7c.574751-.018122,1.116928-.271138,1.5-.7.40203-.393383.619826-.937874.6-1.5.027368-.57407-.181739-1.134272-.578571-1.55s-.946707-.650652-1.521429-.65h-10.2l1.6-12.4h11c.574751-.018122,1.116928-.271138,1.5-.7.40203-.393383.619826-.937874.6-1.5.027368-.57407-.181739-1.134272-.578571-1.55s-.946707-.650652-1.521429-.65Zm-16.2,16.8h-15.3l1.6-12.4h15.3Z"
//           transform="translate(0-.7)"
//           fill="#bcbcbd"
//         />
//         <rect
//           width="25.4"
//           height="4.87"
//           rx="2.4"
//           ry="2.4"
//           transform="translate(519 100.1)"
//           fill="#bcbcbd"
//         />
//         <rect
//           width="25.4"
//           height="4.87"
//           rx="2.4"
//           ry="2.4"
//           transform="translate(519 117.9)"
//           fill="#bcbcbd"
//         />
//         <rect
//           width="25.4"
//           height="4.87"
//           rx="2.4"
//           ry="2.4"
//           transform="translate(519 135.7)"
//           fill="#bcbcbd"
//         />
//         <path
//           d=""
//           transform="translate(0-.7)"
//           fill="none"
//           stroke="#41439b"
//           strokeWidth="5"
//           strokeMiterlimit="10"
//         />
//         <path
//           d="M616.1,132.8h-4.9c-2.112652.000169-4.137353-.845863-5.621798-2.349099s-2.304944-3.538418-2.278202-5.650901v-21.9c0-4.36305,3.53695-7.9,7.9-7.9h28.8c4.36305,0,7.9,3.53695,7.9,7.9v21.9c.026742,2.112483-.793756,4.147665-2.278202,5.650901s-3.509146,2.349268-5.621798,2.349099h-4.1"
//           transform="translate(0-.7)"
//           fill="none"
//           stroke="#bcbcbd"
//           strokeWidth="5"
//           strokeMiterlimit="10"
//         />
//         <path
//           d="M625.6,140.7c-1.835384.083969-3.641499-.482655-5.1-1.6l-6-5.4l1.6-2.6l6.6,5.6c1.1.9,4.7.9,5.8,0l7.4-5.6l2.1,2.5-7.3,5.5c-1.458501,1.117345-3.264616,1.683969-5.1,1.6Z"
//           transform="translate(0-.7)"
//           fill="#bcbcbd"
//         />
//         <circle r="6.3" transform="translate(624.6 108.1)" fill="#bcbebe" />
//         <path
//           d="M617.2,128.4v0c-.54705-.140471-1.014457-.495377-1.296699-.984597s-.355524-1.071506-.203301-1.615403c1.8-4.8,5.4-8,9.4-8s7.1,2.7,9,6.9c.22217.528309.207018,1.126544-.041611,1.642928s-.706844.901293-1.258389,1.057072v0c-.931304.232832-1.896678-.228869-2.3-1.1-1.3-2.8-3.3-4.5-5.4-4.5s-4.5,2.1-5.6,5.3c-.36391.921726-1.322636,1.463615-2.3,1.3Z"
//           transform="translate(0-.7)"
//           fill="#bcbcbd"
//         />
//         <path
//           d="M513.4,97.7l-11.2,10.4c-.026522,0-.051957.010536-.070711.029289s-.029289.044189-.029289.070711v0l-.2.2c-.415634.440416-.994428.690033-1.6.690033s-1.184366-.249617-1.6-.690033l-6.7-6.7c-.434618-.420559-.686101-.995377-.7-1.6-.024149-.612417.233835-1.202096.7-1.6.415634-.440416.994428-.690033,1.6-.690033s1.184366.249617,1.6.690033l5.2,5.1l9.9-9.2c.446304-.381722,1.012748-.594138,1.6-.6.602316.024121,1.1735.274014,1.6.7.42772.429246.659451,1.015907.640524,1.621579s-.286837,1.176719-.740524,1.578421Z"
//           transform="translate(0-.7)"
//           fill="#bab9bb"
//         />
//         <path
//           d="M513.4,116.4l-11.2,10.4h-.1l-.2.2c-.415634.440416-.994428.690033-1.6.690033s-1.184366-.249617-1.6-.690033l-6.7-6.7c-.440416-.415634-.690033-.994428-.690033-1.6s.249617-1.184366.690033-1.6c.415634-.440416.994428-.690033,1.6-.690033s1.184366.249617,1.6.690033l5.2,5.1l9.9-9.2c.446304-.381722,1.012748-.594138,1.6-.6.625924.014819,1.21259.308153,1.6.8.42772.429246.659451,1.015907.640524,1.621579s-.286837,1.176719-.740524,1.578421Z"
//           transform="translate(0-.7)"
//           fill="#bab9bb"
//         />
//         <path
//           d="M513.4,135l-11.2,10.4h-.3c-.415634.440416-.994428.690033-1.6.690033s-1.184366-.249617-1.6-.690033l-6.7-6.7c-.466165-.397904-.724149-.987583-.7-1.6.013899-.604623.265382-1.179441.7-1.6.415634-.440416.994428-.690033,1.6-.690033s1.184366.249617,1.6.690033l5.2,5.2l9.9-9.2c.446304-.381722,1.012748-.594138,1.6-.6.612417-.024149,1.202096.233835,1.6.7.49676.432666.773491,1.065172.754124,1.723651s-.332794,1.273627-.854124,1.676349Z"
//           transform="translate(0-.7)"
//           fill="#bab9bb"
//         />
//       </Svg>
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   fadingContainer: {
//     width: 100,
//     height: 100,
//   },
// });

// export default MenuBar;

import React, { useState } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import Svg, { G, Circle, Rect } from "react-native-svg";

const MenuBarRight = () => {
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
        toValue: -1,
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
        id="ezyCbjk516G1"
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
          transform="matrix(1.096089 0 0 1.046844 423.935878 67.475738)"
          fill="#fff"
          strokeWidth="0"
        />
        <rect
          width="25.4"
          height="4.87"
          rx="2.4"
          ry="2.4"
          transform="translate(519 100.1)"
          fill="#bcbcbd"
        />
        <rect
          width="25.4"
          height="4.87"
          rx="2.4"
          ry="2.4"
          transform="translate(519 117.9)"
          fill="#bcbcbd"
        />
        <rect
          width="25.4"
          height="4.87"
          rx="2.4"
          ry="2.4"
          transform="translate(519 135.7)"
          fill="#bcbcbd"
        />
        <path
          d=""
          transform="translate(0-.7)"
          fill="none"
          stroke="#41439b"
          strokeWidth="5"
          strokeMiterlimit="10"
        />
        <path
          d="M616.1,132.8h-4.9c-2.112652.000169-4.137353-.845863-5.621798-2.349099s-2.304944-3.538418-2.278202-5.650901v-21.9c0-4.36305,3.53695-7.9,7.9-7.9h28.8c4.36305,0,7.9,3.53695,7.9,7.9v21.9c.026742,2.112483-.793756,4.147665-2.278202,5.650901s-3.509146,2.349268-5.621798,2.349099h-4.1"
          transform="translate(0-.7)"
          fill="none"
          stroke="#bcbcbd"
          strokeWidth="5"
          strokeMiterlimit="10"
        />
        <path
          d="M625.6,140.7c-1.835384.083969-3.641499-.482655-5.1-1.6l-6-5.4l1.6-2.6l6.6,5.6c1.1.9,4.7.9,5.8,0l7.4-5.6l2.1,2.5-7.3,5.5c-1.458501,1.117345-3.264616,1.683969-5.1,1.6Z"
          transform="translate(0-.7)"
          fill="#bcbcbd"
        />
        <circle r="6.3" transform="translate(624.6 108.1)" fill="#bcbebe" />
        <path
          d="M617.2,128.4v0c-.54705-.140471-1.014457-.495377-1.296699-.984597s-.355524-1.071506-.203301-1.615403c1.8-4.8,5.4-8,9.4-8s7.1,2.7,9,6.9c.22217.528309.207018,1.126544-.041611,1.642928s-.706844.901293-1.258389,1.057072v0c-.931304.232832-1.896678-.228869-2.3-1.1-1.3-2.8-3.3-4.5-5.4-4.5s-4.5,2.1-5.6,5.3c-.36391.921726-1.322636,1.463615-2.3,1.3Z"
          transform="translate(0-.7)"
          fill="#bcbcbd"
        />
        <path
          d="M513.4,97.7l-11.2,10.4c-.026522,0-.051957.010536-.070711.029289s-.029289.044189-.029289.070711v0l-.2.2c-.415634.440416-.994428.690033-1.6.690033s-1.184366-.249617-1.6-.690033l-6.7-6.7c-.434618-.420559-.686101-.995377-.7-1.6-.024149-.612417.233835-1.202096.7-1.6.415634-.440416.994428-.690033,1.6-.690033s1.184366.249617,1.6.690033l5.2,5.1l9.9-9.2c.446304-.381722,1.012748-.594138,1.6-.6.602316.024121,1.1735.274014,1.6.7.42772.429246.659451,1.015907.640524,1.621579s-.286837,1.176719-.740524,1.578421Z"
          transform="translate(0-.7)"
          fill="#bab9bb"
        />
        <path
          d="M513.4,116.4l-11.2,10.4h-.1l-.2.2c-.415634.440416-.994428.690033-1.6.690033s-1.184366-.249617-1.6-.690033l-6.7-6.7c-.440416-.415634-.690033-.994428-.690033-1.6s.249617-1.184366.690033-1.6c.415634-.440416.994428-.690033,1.6-.690033s1.184366.249617,1.6.690033l5.2,5.1l9.9-9.2c.446304-.381722,1.012748-.594138,1.6-.6.625924.014819,1.21259.308153,1.6.8.42772.429246.659451,1.015907.640524,1.621579s-.286837,1.176719-.740524,1.578421Z"
          transform="translate(0-.7)"
          fill="#bab9bb"
        />
        <path
          d="M513.4,135l-11.2,10.4h-.3c-.415634.440416-.994428.690033-1.6.690033s-1.184366-.249617-1.6-.690033l-6.7-6.7c-.466165-.397904-.724149-.987583-.7-1.6.013899-.604623.265382-1.179441.7-1.6.415634-.440416.994428-.690033,1.6-.690033s1.184366.249617,1.6.690033l5.2,5.2l9.9-9.2c.446304-.381722,1.012748-.594138,1.6-.6.612417-.024149,1.202096.233835,1.6.7.49676.432666.773491,1.065172.754124,1.723651s-.332794,1.273627-.854124,1.676349Z"
          transform="translate(0-.7)"
          fill="#bab9bb"
        />
      </Svg>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  fadingContainer: {
    width: 400,
    height: 400,
    position: "absolute",
  },
});

export default MenuBarRight;

// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Animated } from "react-native";
// import Svg, { G, Circle, Rect } from "react-native-svg";

// const MenuBar = () => {
//   const [fadeAnim] = useState(new Animated.Value(1)); // Initial value for opacity: 1
//   const [translateXAnim] = useState(new Animated.Value(0)); // Initial value for translateX: 0

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 2000,
//     }).start();
//   }, []);

//   return (
//     <Animated.View // Special animatable View
//       style={{
//         ...styles.fadingContainer,
//         opacity: fadeAnim, // Bind opacity to animated value
//         transform: [{ translateX: translateXAnim }], // Bind translateX to animated value
//       }}
//     >
//       <Svg
//         id="e0wSGZn4NVL1"
//         xmlns="http://www.w3.org/2000/svg"
//         //xmlns:xlink="http://www.w3.org/1999/xlink"
//         viewBox="0 0 764.7 235.1"
//         shapeRendering="geometricPrecision"
//         textRendering="geometricPrecision"
//       >
//         <rect
//           width="263.702614"
//           height="94.807368"
//           rx="47.4"
//           ry="47.4"
//           transform="matrix(1.096089 0 0 1.046844 56.7 68.475211)"
//           fill="#fff"
//           strokeWidth="0"
//         />
//         <rect
//           width="263.702614"
//           height="94.807368"
//           rx="47.4"
//           ry="47.4"
//           transform="matrix(1.096089 0 0 1.046844 423.935878 67.475738)"
//           fill="#fff"
//           strokeWidth="0"
//         />
//         <path
//           d="M132.6,137.8v-7.6c0-4.7,3.6-8.6,8-8.6h.2c4.3,0,7.9,3.9,7.9,8.6v7.6"
//           transform="translate(0-.7)"
//           fill="none"
//           stroke="#bcbebe"
//           strokeWidth="7"
//           strokeMiterlimit="10"
//         />
//         <path
//           d="M273,107.7h-10.4l1.5-12.4v-.2c.05934-.903785-.60033-1.695389-1.5-1.8-.477961-.056096-.958481.081537-1.334267.382166s-.615542.739217-.665733,1.217834l-1.7,12.8h-15.3l1.6-12.4v-.2c.005701-.920972-.684711-1.697685-1.6-1.8-.477961-.056096-.958481.081537-1.334267.382166s-.615542.739217-.665733,1.217834L240,107.7h-10.7c-1.173732.094341-2.105659,1.026268-2.2,2.2c0,1.215026.984974,2.2,2.2,2.2h10.1l-1.5,12.4h-11c-1.173732.094341-2.105659,1.026268-2.2,2.2c0,1.215026.984974,2.2,2.2,2.2h10.4l-1.7,13.4c-.110457.994113.605887,1.889543,1.6,2s1.889543-.605887,2-1.6l1.7-13.8h15.4l-1.7,13.4c-.12002.961788.543078,1.845918,1.5,2c1.002581.070061,1.90144-.614784,2.1-1.6l1.7-13.8h10.7c.574751-.018122,1.116928-.271138,1.5-.7.40203-.393383.619826-.937874.6-1.5.027368-.57407-.181739-1.134272-.578571-1.55s-.946707-.650652-1.521429-.65h-10.2l1.6-12.4h11c.574751-.018122,1.116928-.271138,1.5-.7.40203-.393383.619826-.937874.6-1.5.027368-.57407-.181739-1.134272-.578571-1.55s-.946707-.650652-1.521429-.65Zm-16.2,16.8h-15.3l1.6-12.4h15.3Z"
//           transform="translate(0-.7)"
//           fill="#bcbcbd"
//         />
//         <rect
//           width="25.4"
//           height="4.87"
//           rx="2.4"
//           ry="2.4"
//           transform="translate(519 100.1)"
//           fill="#bcbcbd"
//         />
//         <rect
//           width="25.4"
//           height="4.87"
//           rx="2.4"
//           ry="2.4"
//           transform="translate(519 117.9)"
//           fill="#bcbcbd"
//         />
//         <rect
//           width="25.4"
//           height="4.87"
//           rx="2.4"
//           ry="2.4"
//           transform="translate(519 135.7)"
//           fill="#bcbcbd"
//         />
//         <path
//           d=""
//           transform="translate(0-.7)"
//           fill="none"
//           stroke="#41439b"
//           strokeWidth="5"
//           strokeMiterlimit="10"
//         />
//         <path
//           d="M616.1,132.8h-4.9c-2.112652.000169-4.137353-.845863-5.621798-2.349099s-2.304944-3.538418-2.278202-5.650901v-21.9c0-4.36305,3.53695-7.9,7.9-7.9h28.8c4.36305,0,7.9,3.53695,7.9,7.9v21.9c.026742,2.112483-.793756,4.147665-2.278202,5.650901s-3.509146,2.349268-5.621798,2.349099h-4.1"
//           transform="translate(0-.7)"
//           fill="none"
//           stroke="#bcbcbd"
//           strokeWidth="5"
//           strokeMiterlimit="10"
//         />
//         <path
//           d="M625.6,140.7c-1.835384.083969-3.641499-.482655-5.1-1.6l-6-5.4l1.6-2.6l6.6,5.6c1.1.9,4.7.9,5.8,0l7.4-5.6l2.1,2.5-7.3,5.5c-1.458501,1.117345-3.264616,1.683969-5.1,1.6Z"
//           transform="translate(0-.7)"
//           fill="#bcbcbd"
//         />
//         <circle r="6.3" transform="translate(624.6 108.1)" fill="#bcbebe" />
//         <path
//           d="M617.2,128.4v0c-.54705-.140471-1.014457-.495377-1.296699-.984597s-.355524-1.071506-.203301-1.615403c1.8-4.8,5.4-8,9.4-8s7.1,2.7,9,6.9c.22217.528309.207018,1.126544-.041611,1.642928s-.706844.901293-1.258389,1.057072v0c-.931304.232832-1.896678-.228869-2.3-1.1-1.3-2.8-3.3-4.5-5.4-4.5s-4.5,2.1-5.6,5.3c-.36391.921726-1.322636,1.463615-2.3,1.3Z"
//           transform="translate(0-.7)"
//           fill="#bcbcbd"
//         />
//         <path
//           d="M513.4,97.7l-11.2,10.4c-.026522,0-.051957.010536-.070711.029289s-.029289.044189-.029289.070711v0l-.2.2c-.415634.440416-.994428.690033-1.6.690033s-1.184366-.249617-1.6-.690033l-6.7-6.7c-.434618-.420559-.686101-.995377-.7-1.6-.024149-.612417.233835-1.202096.7-1.6.415634-.440416.994428-.690033,1.6-.690033s1.184366.249617,1.6.690033l5.2,5.1l9.9-9.2c.446304-.381722,1.012748-.594138,1.6-.6.602316.024121,1.1735.274014,1.6.7.42772.429246.659451,1.015907.640524,1.621579s-.286837,1.176719-.740524,1.578421Z"
//           transform="translate(0-.7)"
//           fill="#bab9bb"
//         />
//         <path
//           d="M513.4,116.4l-11.2,10.4h-.1l-.2.2c-.415634.440416-.994428.690033-1.6.690033s-1.184366-.249617-1.6-.690033l-6.7-6.7c-.440416-.415634-.690033-.994428-.690033-1.6s.249617-1.184366.690033-1.6c.415634-.440416.994428-.690033,1.6-.690033s1.184366.249617,1.6.690033l5.2,5.1l9.9-9.2c.446304-.381722,1.012748-.594138,1.6-.6.625924.014819,1.21259.308153,1.6.8.42772.429246.659451,1.015907.640524,1.621579s-.286837,1.176719-.740524,1.578421Z"
//           transform="translate(0-.7)"
//           fill="#bab9bb"
//         />
//         <path
//           d="M513.4,135l-11.2,10.4h-.3c-.415634.440416-.994428.690033-1.6.690033s-1.184366-.249617-1.6-.690033l-6.7-6.7c-.466165-.397904-.724149-.987583-.7-1.6.013899-.604623.265382-1.179441.7-1.6.415634-.440416.994428-.690033,1.6-.690033s1.184366.249617,1.6.690033l5.2,5.2l9.9-9.2c.446304-.381722,1.012748-.594138,1.6-.6.612417-.024149,1.202096.233835,1.6.7.49676.432666.773491,1.065172.754124,1.723651s-.332794,1.273627-.854124,1.676349Z"
//           transform="translate(0-.7)"
//           fill="#bab9bb"
//         />
//       </Svg>
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   fadingContainer: {
//     width: 100,
//     height: 100,
//   },
// });

// export default MenuBar;
