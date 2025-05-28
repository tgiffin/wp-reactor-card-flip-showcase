
import React from 'react';

interface FilterBarProps {
  industries: string[];
  selectedIndustries: string[];
  onIndustryToggle: (industry: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  industries, 
  selectedIndustries, 
  onIndustryToggle 
}) => {
  return (
    <div className="w-full bg-white py-6 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-6">
        <h2 className="font-inter font-semibold text-lg text-reactor-dark-blue mb-4">
          Filter by Industry
        </h2>
        <div className="flex flex-wrap gap-3">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => onIndustryToggle(industry)}
              className={`px-4 py-2 rounded-full font-inter font-medium text-sm transition-all duration-300 hover:scale-105 ${
                selectedIndustries.includes(industry)
                  ? 'bg-reactor-blue text-white shadow-lg'
                  : 'bg-gray-100 text-reactor-text-grey hover:bg-soundcommerce-yellow hover:text-reactor-dark-blue'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
