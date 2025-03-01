import React, { useState, useEffect } from 'react';

interface TypewriterLogoProps {
  text: string;
  typingSpeed?: number;
  cursorBlinkSpeed?: number;
}

export const TypewriterLogo: React.FC<TypewriterLogoProps> = ({
  text,
  typingSpeed = 150,
  cursorBlinkSpeed = 500,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Handle typing animation
  useEffect(() => {
    if (isTyping) {
      if (displayedText.length < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(text.substring(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [displayedText, isTyping, text, typingSpeed]);

  // Handle cursor blinking (only after typing is complete)
  useEffect(() => {
    if (!isTyping) {
      const interval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, cursorBlinkSpeed);
      return () => clearInterval(interval);
    }
  }, [isTyping, cursorBlinkSpeed]);

  return (
    <div className="font-bold text-2xl text-white">
      {displayedText}
      <span 
        className="cursor" 
        style={{ 
          opacity: showCursor ? 1 : 0,
          transition: `opacity ${cursorBlinkSpeed / 2}ms ease`,
        }}
      >
        _
      </span>
    </div>
  );
};
