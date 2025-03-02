import React, { useState } from 'react';

const OkEngineBackground: React.FC = () => {
  // Position the rocket between the text and title
  const rocketX = 700;
  const rocketY = 200;
  const rocketScale = 2.0;

  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full h-full">
        <style>
          {`
            /* Star movement animation (from top right to bottom left) */
            @keyframes moveFarStars {
              from { transform: translate(100%, -100%); }
              to { transform: translate(-100%, 100%); }
            }
            
            @keyframes moveMidStars {
              from { transform: translate(100%, -100%); }
              to { transform: translate(-100%, 100%); }
            }
            
            @keyframes moveNearStars {
              from { transform: translate(100%, -100%); }
              to { transform: translate(-100%, 100%); }
            }
            
            /* Rocket shaking animation - using relative values to avoid overriding position */
            @keyframes rocketShake {
              0% { transform: translate(0, 0); }
              25% { transform: translate(-2px, 2px); }
              50% { transform: translate(2px, -1px); }
              75% { transform: translate(1px, 1px); }
              100% { transform: translate(0, 0); }
            }
            
            /* Flame flicker animation */
            @keyframes flameFlicker {
              0% { height: 16px; }
              50% { height: 24px; }
              100% { height: 16px; }
            }
            
            .farStars { animation: moveFarStars 40s linear infinite; }
            .midStars { animation: moveMidStars 25s linear infinite; }
            .nearStars { animation: moveNearStars 15s linear infinite; }
            
            /* Create a separate inner element for the shake animation */
            .rocket-inner {
              animation: rocketShake 0.5s ease-in-out infinite;
              transform-origin: center center;
            }
            
            .flame {
              animation: flameFlicker 0.3s ease-in-out infinite;
              transform-origin: center top;
            }
          `}
        </style>

        {/* Background - darker to reduce the pale blue appearance */}
        <rect width="100%" height="100%" fill="#050A1A"/>
        
        {/* Procedurally generated stars - far layer */}
        <g className="farStars">
          {/* Generate 40 small distant stars */}
          <rect x="100" y="50" width="2" height="2" fill="#7EC0EE" opacity="0.3"/>
          <rect x="220" y="150" width="2" height="2" fill="#7EC0EE" opacity="0.25"/>
          <rect x="350" y="80" width="1" height="1" fill="#7EC0EE" opacity="0.35"/>
          <rect x="480" y="220" width="2" height="2" fill="#7EC0EE" opacity="0.25"/>
          <rect x="600" y="170" width="1" height="1" fill="#7EC0EE" opacity="0.3"/>
          <rect x="150" y="300" width="2" height="2" fill="#7EC0EE" opacity="0.35"/>
          <rect x="280" y="400" width="1" height="1" fill="#7EC0EE" opacity="0.25"/>
          <rect x="410" y="350" width="2" height="2" fill="#7EC0EE" opacity="0.3"/>
          <rect x="550" y="470" width="1" height="1" fill="#7EC0EE" opacity="0.35"/>
          <rect x="670" y="380" width="2" height="2" fill="#7EC0EE" opacity="0.25"/>
          <rect x="120" y="130" width="1" height="1" fill="#7EC0EE" opacity="0.3"/>
          <rect x="250" y="250" width="2" height="2" fill="#7EC0EE" opacity="0.35"/>
          <rect x="390" y="190" width="1" height="1" fill="#7EC0EE" opacity="0.25"/>
          <rect x="520" y="320" width="2" height="2" fill="#7EC0EE" opacity="0.3"/>
          <rect x="640" y="270" width="1" height="1" fill="#7EC0EE" opacity="0.35"/>
          <rect x="180" y="430" width="1" height="1" fill="#7EC0EE" opacity="0.25"/>
          <rect x="320" y="500" width="2" height="2" fill="#7EC0EE" opacity="0.3"/>
          <rect x="450" y="450" width="1" height="1" fill="#7EC0EE" opacity="0.35"/>
          <rect x="590" y="530" width="2" height="2" fill="#7EC0EE" opacity="0.25"/>
          <rect x="700" y="480" width="1" height="1" fill="#7EC0EE" opacity="0.3"/>
          {/* More far stars */}
          <rect x="130" y="90" width="1" height="1" fill="#7EC0EE" opacity="0.25"/>
          <rect x="260" y="210" width="1" height="1" fill="#7EC0EE" opacity="0.3"/>
          <rect x="380" y="150" width="2" height="2" fill="#7EC0EE" opacity="0.35"/>
          <rect x="510" y="280" width="1" height="1" fill="#7EC0EE" opacity="0.25"/>
          <rect x="630" y="230" width="2" height="2" fill="#7EC0EE" opacity="0.3"/>
          <rect x="170" y="370" width="1" height="1" fill="#7EC0EE" opacity="0.35"/>
          <rect x="300" y="440" width="1" height="1" fill="#7EC0EE" opacity="0.25"/>
          <rect x="430" y="390" width="1" height="1" fill="#7EC0EE" opacity="0.3"/>
          <rect x="570" y="510" width="2" height="2" fill="#7EC0EE" opacity="0.35"/>
          <rect x="690" y="420" width="1" height="1" fill="#7EC0EE" opacity="0.25"/>
        </g>
        
        {/* Procedurally generated stars - mid layer */}
        <g className="midStars">
          {/* Generate 30 medium stars */}
          <rect x="150" y="80" width="3" height="3" fill="#B2DFEE" opacity="0.4"/>
          <rect x="280" y="180" width="3" height="3" fill="#B2DFEE" opacity="0.35"/>
          <rect x="400" y="120" width="3" height="3" fill="#B2DFEE" opacity="0.45"/>
          <rect x="520" y="250" width="2" height="2" fill="#B2DFEE" opacity="0.35"/>
          <rect x="600" y="150" width="3" height="3" fill="#B2DFEE" opacity="0.4"/>
          <rect x="240" y="380" width="2" height="2" fill="#B2DFEE" opacity="0.45"/>
          <rect x="450" y="420" width="3" height="3" fill="#B2DFEE" opacity="0.35"/>
          <rect x="580" y="350" width="2" height="2" fill="#B2DFEE" opacity="0.4"/>
          <rect x="680" y="430" width="3" height="3" fill="#B2DFEE" opacity="0.45"/>
          <rect x="170" y="140" width="2" height="2" fill="#B2DFEE" opacity="0.35"/>
          <rect x="290" y="260" width="3" height="3" fill="#B2DFEE" opacity="0.4"/>
          <rect x="420" y="200" width="2" height="2" fill="#B2DFEE" opacity="0.45"/>
          <rect x="540" y="320" width="3" height="3" fill="#B2DFEE" opacity="0.35"/>
          <rect x="620" y="240" width="2" height="2" fill="#B2DFEE" opacity="0.4"/>
          <rect x="200" y="400" width="3" height="3" fill="#B2DFEE" opacity="0.45"/>
          <rect x="330" y="470" width="2" height="2" fill="#B2DFEE" opacity="0.35"/>
          <rect x="460" y="380" width="3" height="3" fill="#B2DFEE" opacity="0.4"/>
          <rect x="590" y="490" width="2" height="2" fill="#B2DFEE" opacity="0.45"/>
          <rect x="710" y="360" width="3" height="3" fill="#B2DFEE" opacity="0.35"/>
          <rect x="190" y="110" width="2" height="2" fill="#B2DFEE" opacity="0.4"/>
        </g>
        
        {/* Procedurally generated stars - near layer */}
        <g className="nearStars">
          {/* Generate 20 large foreground stars */}
          <rect x="100" y="50" width="4" height="4" fill="white" opacity="1.0"/>
          <rect x="230" y="150" width="4" height="4" fill="white" opacity="0.9"/>
          <rect x="360" y="90" width="5" height="5" fill="white" opacity="1.0"/>
          <rect x="490" y="220" width="4" height="4" fill="white" opacity="0.9"/>
          <rect x="610" y="160" width="5" height="5" fill="white" opacity="1.0"/>
          <rect x="180" y="340" width="4" height="4" fill="white" opacity="0.9"/>
          <rect x="310" y="430" width="5" height="5" fill="white" opacity="1.0"/>
          <rect x="440" y="370" width="4" height="4" fill="white" opacity="0.9"/>
          <rect x="570" y="490" width="5" height="5" fill="white" opacity="1.0"/>
          <rect x="690" y="410" width="4" height="4" fill="white" opacity="0.9"/>
          <rect x="140" y="120" width="5" height="5" fill="white" opacity="1.0"/>
          <rect x="270" y="230" width="4" height="4" fill="white" opacity="0.9"/>
          <rect x="400" y="170" width="5" height="5" fill="white" opacity="1.0"/>
          <rect x="530" y="290" width="4" height="4" fill="white" opacity="0.9"/>
          <rect x="650" y="210" width="5" height="5" fill="white" opacity="1.0"/>
        </g>
        
        {/* 8-bit rocket with shaking animation - position, rotation and scale controlled by variables */}
        <g transform={`translate(${rocketX}, ${rocketY})`}>
          {/* Apply rotation first, then scale, and then the shake animation */}
          <g transform={`rotate(45) scale(${rocketScale})`}>
            <g className="rocket-inner">
            {/* Rocket body */}
            <rect x="-12" y="-24" width="24" height="48" fill="#FF5252"/>
            
            {/* Rocket nose */}
            <rect x="-4" y="-32" width="8" height="8" fill="#FF5252"/>
            
            {/* Rocket windows */}
            <rect x="-4" y="-16" width="8" height="8" fill="#BBDEFB"/>
            <rect x="-4" y="0" width="8" height="8" fill="#BBDEFB"/>
            
            {/* Rocket fins */}
            <rect x="-20" y="16" width="8" height="16" fill="#FF5252"/>
            <rect x="12" y="16" width="8" height="16" fill="#FF5252"/>
            
            {/* Rocket flame - properly attached to bottom */}
            <rect className="flame" x="-8" y="24" width="16" rx="0" ry="0" height="20" fill="#FFEB3B"/>
            <rect className="flame" x="-4" y="24" width="8" rx="0" ry="0" height="24" fill="#FFA000"/>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default OkEngineBackground;
