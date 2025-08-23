'use client'
import { TypeAnimation } from 'react-type-animation';

const TypeTextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Anang',
        1500,
        'Setiaji',
        1500,
        'Frontend',
        1500,
        'Designer',
        1500
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TypeTextAnimation;