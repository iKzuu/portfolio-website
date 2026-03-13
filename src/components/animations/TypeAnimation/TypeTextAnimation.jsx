'use client'
import { TypeAnimation } from 'react-type-animation';

const TypeTextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Frontend Developer',
        1500,
        'Graphic Designer',
        1500
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TypeTextAnimation;