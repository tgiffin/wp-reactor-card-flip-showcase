
import React from 'react';

interface FilterBarProps {
  industries: string[];
  roles: string[];
  selectedIndustries: string[];
  selectedRoles: string[];
  onIndustryToggle: (industry: string) => void;
  onRoleToggle: (role: string) => void;
  onClearFilters: () => void;
  filteredCount: number;
  totalCount: number;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  industries,
  roles,
  selectedIndustries,
  selectedRoles,
  onIndustryToggle,
  onRoleToggle,
  onClearFilters,
  filteredCount,
  totalCount
}) => {
  const hasActiveFilters = selectedIndustries.length > 0 || selectedRoles.length > 0;

  return (
    <div className="w-full bg-white py-6 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
          <h2 className="font-inter font-semibold text-lg text-reactor-dark-blue mb-2 lg:mb-0">
            Filter Use Cases
          </h2>
          <div className="flex items-center gap-4">
            <span className="font-inter text-sm text-reactor-text-grey">
              Showing {filteredCount} of {totalCount} use cases
            </span>
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="px-3 py-1 text-sm font-inter font-medium text-reactor-red hover:bg-reactor-red hover:text-white rounded-md transition-colors duration-200"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
        
        <div className="space-y-4">
          {/* Industry Filters */}
          <div>
            <h3 className="font-inter font-medium text-sm text-reactor-blue mb-2">
              By Industry
            </h3>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => onIndustryToggle(industry)}
                  className={`px-3 py-2 rounded-full font-inter font-medium text-sm transition-all duration-300 hover:scale-105 ${
                    selectedIndustries.includes(industry)
                      ? 'bg-reactor-blue text-white shadow-lg'
                      : 'bg-gray-100 text-reactor-text-grey hover:bg-reactor-blue hover:text-white'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          {/* Role Filters */}
          <div>
            <h3 className="font-inter font-medium text-sm text-soundcommerce-yellow mb-2">
              By Role
            </h3>
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => onRoleToggle(role)}
                  className={`px-3 py-2 rounded-full font-inter font-medium text-sm transition-all duration-300 hover:scale-105 ${
                    selectedRoles.includes(role)
                      ? 'bg-soundcommerce-yellow text-reactor-dark-blue shadow-lg'
                      : 'bg-gray-100 text-reactor-text-grey hover:bg-soundcommerce-yellow hover:text-reactor-dark-blue'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
