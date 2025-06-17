
import { UseCase } from './types';
import { retailUseCases } from './industries/retail';
import { travelUseCases } from './industries/travel';
import { consumerUseCases } from './industries/consumer';
import { mediaUseCases } from './industries/media';
import { financeUseCases } from './industries/finance';
import { eldercareUseCases } from './industries/eldercare';
import { automotiveUseCases } from './industries/automotive';
import { b2bHightechUseCases } from './industries/b2b-hightech';

export const industryUseCases: UseCase[] = [
  ...retailUseCases,
  ...travelUseCases,
  ...consumerUseCases,
  ...mediaUseCases,
  ...financeUseCases,
  ...eldercareUseCases,
  ...automotiveUseCases,
  ...b2bHightechUseCases
];
