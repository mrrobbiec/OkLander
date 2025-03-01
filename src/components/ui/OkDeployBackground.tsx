import React from 'react';
import CodeBlockBackground from './CodeBlockBackground';

const OkDeployBackground: React.FC = () => {
  return (
    <CodeBlockBackground 
      color="#ffc658" // Using the yellow color from the chart colors in style guide
      geometry="sphere"
      characters=" .:-+*=%@#"
      resolution={0.12} // Even lower resolution for larger ASCII characters
      rotationSpeed={{ x: 0.0001, y: 0.0003, z: 0.0004 }} // Different rotation speed
    />
  );
};

export default OkDeployBackground;
