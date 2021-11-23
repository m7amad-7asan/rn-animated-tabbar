import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Settings = () => {
  return (
    <Svg width={26} height={26} fill="none">
      <Path
        fill="#fff"
        d="M13 8.179a4.822 4.822 0 100 9.643 4.822 4.822 0 000-9.643zM9.786 13a3.214 3.214 0 116.427 0 3.214 3.214 0 01-6.427 0z"
      />
      <Path
        fill="#fff"
        d="M21.26 21.995l-1.85-.814a1.843 1.843 0 00-1.653.092c-.5.29-.82.8-.883 1.376l-.223 2.014a.988.988 0 01-.753.853 12.503 12.503 0 01-5.798 0 .99.99 0 01-.752-.852l-.223-2.012A1.823 1.823 0 007.42 21.04a1.816 1.816 0 00-.828.149L4.74 22a.985.985 0 01-1.117-.23 12.926 12.926 0 01-2.9-5.006.99.99 0 01.357-1.089l1.636-1.208a1.821 1.821 0 000-2.936L1.08 10.327a.99.99 0 01-.357-1.09 12.92 12.92 0 012.902-5 .986.986 0 011.118-.23l1.842.812a1.829 1.829 0 002.54-1.475l.226-2.012a.989.989 0 01.766-.856c.944-.21 1.907-.321 2.897-.333.966.01 1.929.123 2.871.333a.988.988 0 01.766.857l.224 2.012a1.823 1.823 0 001.809 1.627c.25 0 .497-.053.729-.155l1.842-.81a.986.986 0 011.118.229 12.92 12.92 0 012.901 5 .99.99 0 01-.357 1.089l-1.633 1.207A1.828 1.828 0 0022.536 13c0 .579.281 1.124.749 1.468l1.635 1.206a.992.992 0 01.357 1.09 12.928 12.928 0 01-2.9 5 .986.986 0 01-1.117.23zm-5.835-.213a3.388 3.388 0 013.057-2.355 3.451 3.451 0 011.572.283l1.44.633a11.32 11.32 0 002.111-3.641l-1.274-.94v-.001a3.436 3.436 0 01-1.402-2.762c0-1.1.532-2.122 1.4-2.76l.002-.001 1.272-.94a11.316 11.316 0 00-2.112-3.64l-1.428.628-.002.001a3.395 3.395 0 01-1.378.292 3.43 3.43 0 01-3.405-3.056v-.002l-.175-1.564a12.294 12.294 0 00-2.09-.207c-.721.01-1.424.08-2.115.207l-.175 1.565A3.435 3.435 0 015.94 6.29l-1.431-.63A11.312 11.312 0 002.396 9.3l1.275.939a3.43 3.43 0 010 5.523l-1.275.94a11.32 11.32 0 002.11 3.647l1.442-.632a3.422 3.422 0 014.775 2.754v.006l.174 1.568c1.39.273 2.818.273 4.207 0l.174-1.572a3.42 3.42 0 01.148-.69h-.001z"
      />
    </Svg>
  );
};
