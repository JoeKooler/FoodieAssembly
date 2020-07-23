import React from "react";
import Svg, { Path, Ellipse, Rect } from "react-native-svg";

const BottomBun = () => {
  return (
    <Svg
      width="142"
      height="32"
      viewBox="0 0 142 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M142 9.45275C142 21.9052 110.212 32 71 32C31.7878 32 0 21.9052 0 9.45275C0 -2.99975 31.7878 0.433807 71 0.433807C110.212 0.433807 142 -2.99975 142 9.45275Z"
        fill="#FFEA7C"
      />
    </Svg>
  );
};

const Patty = () => {
  return (
    <Svg
      width="144"
      height="21"
      viewBox="0 0 144 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Ellipse cx="72" cy="10.5" rx="72" ry="10.5" fill="#EF940B" />
    </Svg>
  );
};

const Veggy = () => {
  return (
    <Svg
      width="159"
      height="20"
      viewBox="0 0 159 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M18.7059 0L7.79412 8.23529L0 14.1176L6.23529 16.4706V18.8235L14.0294 16.4706L18.7059 14.1176C22.3431 14.902 30.2412 16.4706 32.7353 16.4706C35.2294 16.4706 38.9706 14.1176 40.5294 12.9412H59.2353H74.8235C77.4216 12.1569 83.2412 10.5882 85.7353 10.5882C88.8529 10.5882 99.7647 12.9412 106 14.1176C112.235 15.2941 115.353 11.7647 120.029 10.5882C124.706 9.41177 124.706 12.9412 127.824 15.2941C130.941 17.6471 137.176 12.9412 138.735 12.9412C139.982 12.9412 147.569 15.2941 151.206 16.4706L159 20L157.441 15.2941L151.206 8.23529L149.647 2.35294L126.265 7.05882L115.353 1.17647L93.5294 7.05882L68.5882 2.35294L70.1471 7.05882L37.4118 0L29.6176 8.23529L18.7059 0Z"
        fill="#82FF9D"
      />
    </Svg>
  );
};

const Tomato = () => {
  return (
    <Svg
      width="148"
      height="13"
      viewBox="0 0 148 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="93" height="9" rx="4.5" fill="#FF5E5E" />
      <Rect x="55" y="4" width="93" height="9" rx="4.5" fill="#FF5E5E" />
    </Svg>
  );
};

const TopBun = () => {
  return (
    <Svg
      width="142"
      height="32"
      viewBox="0 0 142 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M142 22.5473C142 10.0948 110.212 0 71 0C31.7878 0 0 10.0948 0 22.5473C0 34.9998 31.7878 31.5662 71 31.5662C110.212 31.5662 142 34.9998 142 22.5473Z"
        fill="#FFEA7C"
      />
    </Svg>
  );
};

export { BottomBun, Patty, Veggy, Tomato, TopBun };
