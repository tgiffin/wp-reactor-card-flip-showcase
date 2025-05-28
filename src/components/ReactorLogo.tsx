
import React from 'react';

const ReactorLogo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 120 40" className="w-full h-full">
        {/* Reactor Logo - simplified atomic symbol */}
        <g>
          {/* Central circle */}
          <circle cx="20" cy="20" r="6" fill="#FFCC00" stroke="#2462AA" strokeWidth="2"/>
          {/* Electron paths */}
          <circle cx="20" cy="20" r="3" fill="#BF372A"/>
          <circle cx="12" cy="12" r="2" fill="#BF372A"/>
          <circle cx="28" cy="12" r="2" fill="#E87B00"/>
          <circle cx="12" cy="28" r="2" fill="#E87B00"/>
          <circle cx="28" cy="28" r="2" fill="#E87B00"/>
          {/* Text */}
          <text x="45" y="25" className="fill-reactor-dark-blue font-inter font-bold text-sm">REACTOR</text>
        </g>
      </svg>
    </div>
  );
};

export default ReactorLogo;
