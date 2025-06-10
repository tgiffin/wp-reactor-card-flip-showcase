
export interface UseCase {
  id: string;
  industry?: string;
  role?: string;
  title: string;
  whyItMatters: string;
  dataSources: string[];
  entitiesTables: string[];
  sampleFields: string[];
  reactorRole: string;
  gradientClass: string;
}
