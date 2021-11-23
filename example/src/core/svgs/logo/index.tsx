import React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

export const Logo = () => {
  return (
    <Svg width={337} height={33} fill="none">
      <Path fill="url(#prefix__pattern0)" d="M0 0h337v33H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <Use transform="matrix(.00035 0 0 .00355 0 -.01)" />
        </Pattern>
        <Image id="prefix__image0" width={2875} height={287} />
      </Defs>
    </Svg>
  );
};
