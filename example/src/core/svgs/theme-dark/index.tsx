import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ThemeDark = () => {
  return (
    <Svg width={20} height={20} fill="none">
      <Path
        fill="#fff"
        d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18.571V1.43a8.571 8.571 0 010 17.142z"
      />
    </Svg>
  );
};
