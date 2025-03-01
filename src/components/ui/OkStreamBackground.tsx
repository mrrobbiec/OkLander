import React from 'react';
import CodeBlockBackground from './CodeBlockBackground';

const OkStreamBackground: React.FC = () => {
  return (
    <CodeBlockBackground 
      color="#4a9eff" 
      geometry="torusKnot"
      characters=" .:-+*=%@#"
      resolution={0.12} // Even lower resolution for larger ASCII characters
      rotationSpeed={{ x: 0.0003, y: 0.0004, z: 0.0002 }}
    />
  );
};

export default OkStreamBackground;
