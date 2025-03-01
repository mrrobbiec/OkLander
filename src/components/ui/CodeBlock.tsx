import React, { useEffect, useRef, ReactNode } from 'react';
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import './CodeBlock.css';

// Register the languages you need
hljs.registerLanguage('python', python);

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
  background?: ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, title, background }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  // Split the code into lines for line numbering
  const codeLines = code.split('\n');

  return (
    <div className="rounded-lg overflow-hidden bg-slate-950/80 mb-6 relative">
      {/* Background component */}
      {background && (
        <div className="absolute inset-0 overflow-hidden">
          {background}
        </div>
      )}
      {title && (
        <div className="px-4 py-2 bg-slate-900/90 flex items-center relative z-10">
          <div className="flex space-x-2 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-white/80 text-sm font-medium">{title}</span>
        </div>
      )}
      <div className="p-3 overflow-auto relative z-10">
        <pre className="m-0">
          <code ref={codeRef} className={`language-${language}`}>
            {codeLines.map((line, index) => (
              <span key={index} className="line">
                {line}
                {index < codeLines.length - 1 ? '\n' : ''}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
