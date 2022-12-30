import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

const Logo = () => {
  const radius = 102.2;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(637);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress <= 0) {
            clearInterval(interval);
            return 0;
          }
          if (prevProgress <= 142 && prevProgress > 42) {
            return prevProgress - 0.4;
          } else if (prevProgress <= 42 && prevProgress > 22) {
            return prevProgress - 0.15;
          } else if (prevProgress <= 22) {
            return prevProgress - 0.07;
          }
          return prevProgress - 1;
        });
      }, 10); // update progress every 10 milliseconds
      return () => clearInterval(interval);
    }, 4000); // delay function execution by 4 seconds

    return () => clearTimeout(timeout);
  }, []);
  console.log(progress);

  return (
    <Svg
      id="eSmc26lhx5Y1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1094.1 436.3"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      style={styles.fadingContainer}
    >
      <Circle
        r="105.4"
        transform="matrix(.969639 0 0 0.969639 547.1 218.2)"
        fill="#fff"
      />

      <Circle
        r={radius}
        transform="matrix(.873586 0 0 0.888254 547.099993 218.2)"
        fill="none"
        stroke="#da5b6e"
        strokeWidth="10"
        strokeMiterlimit="10"
        strokeDasharray={circumference}
        strokeDashoffset={progress}
        //642
      />

      <path
        d="M568.3,215c17.9-3.1,22.5-10.4,22.5-18.9s-5.5-17-28.3-18.9v-16.5h-11.1v16.1h-8.4v-16.1h-11.1v16.1h-19v9.5h15c.1,10.3.1,20.6.1,30.9v2.7c0,10.4,0,20.6-.1,30.7h-14.8v9.5h18.8v15.5h11.1v-15.5h8.4v15.6h11.1v-16.5c28.4-3.1,33.5-14,33.5-22.7c0-12-7.8-19.4-27.7-21.5Zm-14.4-30.3c8.8,0,18.2,4.8,18.2,13.3s-9.9,14.8-18.9,14.8h-9.8c0-9.4,0-18.8.2-28.1Zm0,67.5h-10.3c-.2-10.7-.2-21.4-.2-32.2h10.7c10.7,0,21.7,4.7,21.7,16.2s-12,16-21.9,16Z"
        transform="translate(-7.4 0)"
        fill="#da5b6e"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  fadingContainer: {
    position: "absolute",
    width: 450,
    height: 430,
    bottom: 320,
    zIndex: 99,
  },
});

export default Logo;
