// import React, { useState } from "react";
// import { View, Text, StyleSheet, Animated, Easing } from "react-native";
// import Svg, { G, Circle, Rect } from "react-native-svg";

// const Bar = () => {
//   const [fadeAnim] = useState(new Animated.Value(1)); // Initial value for opacity: 0
//   const [anim] = useState(new Animated.Value(0));
//   const [fadeAnim2] = useState(new Animated.Value(1)); // Initial value for opacity: 0
//   const [anim2] = useState(new Animated.Value(0));

//   React.useEffect(() => {
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 0,
//         duration: 2000,
//       }),
//       //Animated.timing(translateXAnim, { toValue: 100, duration: 2000 }),
//       //Animated.timing(scaleAnim, { toValue: 0, duration: 1000 }),
//       Animated.timing(anim, {
//         toValue: -1,
//         duration: 2000,
//         easing: Easing.ease,
//       }),
//       Animated.timing(fadeAnim2, {
//         toValue: 0,
//         duration: 2000,
//       }),
//       //Animated.timing(translateXAnim, { toValue: 100, duration: 2000 }),
//       //Animated.timing(scaleAnim, { toValue: 0, duration: 1000 }),
//       Animated.timing(anim2, {
//         toValue: 1,
//         duration: 2000,
//         easing: Easing.ease,
//       }),
//     ]).start();
//   }, []);

//   return (
//     <Animated.View // Special animatable View
//       style={{
//         ...styles.fadingContainer,
//         opacity: fadeAnim, // Bind opacity to animated value
//         opacity: fadeAnim2,
//         transform: [
//           {
//             translateX: anim.interpolate({
//               inputRange: [0, 1],
//               outputRange: [0, 100],
//             }),
//           },
//         ],
//         transform: [
//           {
//             translateX: anim2.interpolate({
//               inputRange: [0, 1],
//               outputRange: [0, 100],
//             }),
//           },
//         ],
//       }}
//     >
//       <Svg
//         id="ev7PKg8WzYI1"
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
//           transform="translate(5.064591-4.05)"
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
//     width: "100%",
//     height: "100%",
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default Bar;
