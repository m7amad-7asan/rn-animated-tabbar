import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Currency = () => {
  return (
    <Svg width={30} height={30} fill="none">
      <Path
        fill="#fff"
        d="M15 .156A14.844 14.844 0 1029.844 15 14.86 14.86 0 0015 .156zm0 28.5A13.657 13.657 0 1128.656 15 13.673 13.673 0 0115 28.656zm5.344-10.687a3.567 3.567 0 01-3.563 3.562h-1.187v1.782a.594.594 0 01-1.188 0V21.53h-2.969a.593.593 0 110-1.187h5.344a2.375 2.375 0 000-4.75H13.22a3.563 3.563 0 010-7.125h1.187v-1.78a.594.594 0 111.188 0v1.78h2.969a.594.594 0 010 1.188H13.22a2.375 2.375 0 100 4.75h3.562a3.567 3.567 0 013.563 3.563z"
      />
    </Svg>
  );
};
