
import React, { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import UseCaseCard from '../components/UseCaseCard';
import ReactorLogo from '../components/ReactorLogo';
import { useCases, industries } from '../data/useCases';

const Index = () => {
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [visibleCards, setVisibleCards] = useState<string[]>([]);

  const filteredUseCases = selectedIndustries.length === 0 
    ? useCases 
    : useCases.filter(useCase => selectedIndustries.includes(useCase.industry));

  const handleIndustryToggle = (industry: string) => {
    setSelectedIndustries(prev => 
      prev.includes(industry) 
        ? prev.filter(i => i !== industry)
        : [...prev, industry]
    );
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
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <ReactorLogo className="w-12 h-12" />
              <div>
                <h1 className="font-inter font-bold text-3xl text-reactor-dark-blue">
                  Industry Use Cases
                </h1>
                <p className="font-inter text-reactor-text-grey">
                  Discover how Reactor Data transforms industries through intelligent data solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <FilterBar 
        industries={industries}
        selectedIndustries={selectedIndustries}
        onIndustryToggle={handleIndustryToggle}
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
              No use cases found for the selected industries.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-reactor-dark-blue text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <ReactorLogo className="w-16 h-16 mx-auto mb-4" />
          <p className="font-inter text-sm">
            © 2024 Reactor Data. Transforming data into actionable insights.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
