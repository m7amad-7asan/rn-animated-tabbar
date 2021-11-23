import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Theme = () => {
  return (
    <Svg width={18} height={18} fill="none">
      <Path
        fill="#000"
        d="M9 .25a8.75 8.75 0 100 17.5A8.75 8.75 0 009 .25zM9 16.5v-15a7.5 7.5 0 110 15z"
      />
    </Svg>
  );
};
