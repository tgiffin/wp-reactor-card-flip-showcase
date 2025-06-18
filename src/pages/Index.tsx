
import React, { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import UseCaseCard from '../components/UseCaseCard';
import ReactorLogo from '../components/ReactorLogo';
import { useCases, industries, roles } from '../data';

const Index = () => {
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [visibleCards, setVisibleCards] = useState<string[]>([]);

  const filteredUseCases = useCases.filter(useCase => {
    const matchesIndustry = selectedIndustries.length === 0 || (useCase.industry && selectedIndustries.includes(useCase.industry));
    const matchesRole = selectedRoles.length === 0 || (useCase.role && selectedRoles.includes(useCase.role));
    
    // If no filters are selected, show all
    if (selectedIndustries.length === 0 && selectedRoles.length === 0) {
      return true;
    }
    
    // If only industry filters are selected
    if (selectedIndustries.length > 0 && selectedRoles.length === 0) {
      return matchesIndustry;
    }
    
    // If only role filters are selected
    if (selectedRoles.length > 0 && selectedIndustries.length === 0) {
      return matchesRole;
    }
    
    // If both filters are selected, use OR logic (union)
    return matchesIndustry || matchesRole;
  });

  const handleIndustryToggle = (industry: string) => {
    setSelectedIndustries(prev => 
      prev.includes(industry) 
        ? prev.filter(i => i !== industry)
        : [...prev, industry]
    );
  };

  const handleRoleToggle = (role: string) => {
    setSelectedRoles(prev => 
      prev.includes(role) 
        ? prev.filter(r => r !== role)
        : [...prev, role]
    );
  };

  const handleClearFilters = () => {
    setSelectedIndustries([]);
    setSelectedRoles([]);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...prev, entry.target.id]);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const cardElements = document.querySelectorAll('[data-card-id]');
    cardElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredUseCases]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <header className="bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-start space-x-6 mb-8">
            <ReactorLogo className="w-20 h-20 flex-shrink-0" variant="horizontal-dark" />
            <div className="flex-1">
              <h1 className="font-inter font-bold text-4xl lg:text-5xl text-reactor-dark-blue mb-3">
                Industry Use Cases
              </h1>
              <p className="font-inter font-semibold text-xl text-reactor-blue mb-6">
                Reactor activates your data supply chain — powered by Electron AI.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl space-y-6">
            <p className="font-inter text-lg text-reactor-text-grey leading-relaxed">
              Every business outcome starts with data. Whether it's a dashboard, a predictive model, or a personalized experience, Reactor ensures the data gets where it needs to go. Clean, unified, and ready for action.
            </p>
            
            <p className="font-inter text-lg text-reactor-text-grey leading-relaxed">
              With Electron AI built in, teams move faster. Reactor and Electron simplify pipeline setup, field mapping, and transformation tasks — even generating AI-ready outputs, for your Data warehouse platforms, which are now multi-purpose.
            </p>
            
            <p className="font-inter text-lg text-reactor-text-grey leading-relaxed">
              Use the filters to explore use cases by industry or role, and see how Reactor helps data teams go from source to solution, without the manual heavy lifting.
            </p>
            
            <div className="pt-4">
              <p className="font-inter font-semibold text-lg text-reactor-medium-blue italic">
                "Electron isn't just an assistant — it's your teammate inside the pipeline."
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <FilterBar 
        industries={industries}
        roles={roles}
        selectedIndustries={selectedIndustries}
        selectedRoles={selectedRoles}
        onIndustryToggle={handleIndustryToggle}
        onRoleToggle={handleRoleToggle}
        onClearFilters={handleClearFilters}
        filteredCount={filteredUseCases.length}
        totalCount={useCases.length}
      />

      {/* Cards Grid */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredUseCases.map((useCase, index) => (
            <div
              key={useCase.id}
              id={`card-${useCase.id}`}
              data-card-id={useCase.id}
              className={`transition-all duration-700 ${
                visibleCards.includes(`card-${useCase.id}`) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
            >
              <UseCaseCard
                industry={useCase.industry}
                title={useCase.title}
                whyItMatters={useCase.whyItMatters}
                dataSources={useCase.dataSources}
                entitiesTables={useCase.entitiesTables}
                sampleFields={useCase.sampleFields}
                reactorRole={useCase.reactorRole}
                gradientClass={useCase.gradientClass}
              />
            </div>
          ))}
        </div>

        {filteredUseCases.length === 0 && (
          <div className="text-center py-16">
            <p className="font-inter text-lg text-reactor-text-grey">
              No use cases found for the selected filters.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-reactor-dark-blue text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <ReactorLogo className="w-20 h-20 mx-auto mb-4" variant="horizontal-light" />
          <p className="font-inter text-sm">
            © 2024 Reactor Data. Transforming data into actionable insights.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
