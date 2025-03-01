import React from 'react';
import CodeBlockBackground from './CodeBlockBackground';

const OkFlowBackground: React.FC = () => {
  return (
    <CodeBlockBackground 
      color="#82ca9d" // Using the green color from the chart colors in style guide
      geometry="torus"
      characters=" .:-+*=%@#"
      resolution={0.12} // Even lower resolution for larger ASCII characters
      rotationSpeed={{ x: 0.0002, y: 0.0005, z: 0.0001 }} // Different rotation speed
    />
  );
};

export default OkFlowBackground;
