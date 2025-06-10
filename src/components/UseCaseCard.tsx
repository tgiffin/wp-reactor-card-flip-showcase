
import React, { useState } from 'react';
import ReactorLogo from './ReactorLogo';

interface UseCaseCardProps {
  industry: string;
  title: string;
  whyItMatters: string;
  dataSources: string[];
  entitiesTables: string[];
  sampleFields: string[];
  reactorRole: string;
  gradientClass: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  industry,
  title,
  whyItMatters,
  dataSources,
  entitiesTables,
  sampleFields,
  reactorRole,
  gradientClass
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-80 perspective-1000 cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front of card */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${gradientClass} p-6 flex flex-col justify-between`}>
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-inter font-medium">
                {industry}
              </span>
              <ReactorLogo className="w-8 h-8 opacity-80" variant="bug-color" />
            </div>
            
            <h3 className="font-inter font-bold text-xl text-white mb-3 leading-tight">
              {title}
            </h3>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold text-sm text-white/90 mb-2">
              Why It Matters
            </h4>
            <p className="font-inter text-sm text-white/85 leading-relaxed">
              {whyItMatters}
            </p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-lg bg-white p-6 overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-inter font-bold text-lg text-reactor-dark-blue">
              {title}
            </h3>
            <ReactorLogo className="w-8 h-8" variant="bug-navy" />
          </div>
          
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-inter font-semibold text-reactor-blue mb-1">Reactor's Role</h4>
              <p className="text-reactor-text-grey">{reactorRole}</p>
            </div>
            
            <div>
              <h4 className="font-inter font-semibold text-reactor-blue mb-1">Data Sources</h4>
              <p className="text-reactor-text-grey">{dataSources.join(', ')}</p>
            </div>
            
            <div>
              <h4 className="font-inter font-semibold text-reactor-blue mb-1">Entities/Tables</h4>
              <p className="text-reactor-text-grey">{entitiesTables.join(', ')}</p>
            </div>
            
            <div>
              <h4 className="font-inter font-semibold text-reactor-blue mb-1">Sample Fields</h4>
              <p className="text-reactor-text-grey">{sampleFields.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseCard;
