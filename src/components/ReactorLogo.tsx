
import React from 'react';

interface ReactorLogoProps {
  className?: string;
  variant?: 'horizontal-light' | 'horizontal-dark' | 'vertical-dark' | 'vertical-light' | 'bug-color' | 'bug-navy' | 'bug-black' | 'vertical-black' | 'vertical-navy';
}

const ReactorLogo: React.FC<ReactorLogoProps> = ({ 
  className = "w-8 h-8", 
  variant = 'bug-color' 
}) => {
  const getLogoSrc = () => {
    switch (variant) {
      case 'horizontal-light':
        return '/lovable-uploads/00f768e6-ae5e-4012-9f60-777314081070.png'; // Logo_Reactor_H_4C-Light
      case 'horizontal-dark':
        return '/lovable-uploads/a757a447-ea52-4a70-b21a-8cce883a9002.png'; // Logo_Reactor_V_4C-Dark (using this for horizontal dark)
      case 'vertical-dark':
        return '/lovable-uploads/5e3f6622-2122-47a3-85b4-40b27b7a9748.png'; // Logo_Reactor_V_4C-Dark
      case 'vertical-light':
        return '/lovable-uploads/a757a447-ea52-4a70-b21a-8cce883a9002.png'; // Logo_Reactor_V_4C-Light
      case 'bug-color':
        return '/lovable-uploads/ff2959b0-0f54-4565-9b8c-694340110cb3.png'; // Logo_Reactor_BUG_4C
      case 'bug-navy':
        return '/lovable-uploads/dedc235b-0577-4cd4-8704-2febd00c4993.png'; // Logo_Reactor_BUG_Navy
      case 'bug-black':
        return '/lovable-uploads/b05d96a4-3c8b-4abb-b098-e39d34d37ab4.png'; // Logo_Reactor_BUG_BLACK
      case 'vertical-black':
        return '/lovable-uploads/30d252e6-3035-4523-b08e-4879e5d7782b.png'; // Logo_Reactor_V_BLACK
      case 'vertical-navy':
        return '/lovable-uploads/5c44e458-5784-41e0-9356-5a0481ea477d.png'; // Logo_Reactor_V_1C-NavyDark
      default:
        return '/lovable-uploads/ff2959b0-0f54-4565-9b8c-694340110cb3.png'; // Default to bug color
    }
  };

  return (
    <div className={`${className} flex items-center justify-center`}>
      <img 
        src={getLogoSrc()} 
        alt="Reactor Data Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default ReactorLogo;
