export type HairType = 'wavy' | 'curly' | 'straight' | 'combination';
export type ScalpCondition = 'oily' | 'dry' | 'normal' | 'sensitive';
export type Symptom = 'dandruff' | 'hairfall' | 'damaged' | 'dryrough' | 'lackshine' | 'itchy';
export type Lifestyle = 'outdoor' | 'indoor' | 'swim' | 'active';
export type Budget = 'under200' | '200to500' | 'above500';

export interface UserProfile {
  hairType: HairType | null;
  scalpCondition: ScalpCondition | null;
  symptoms: Symptom[];
  lifestyle: Lifestyle | null;
  budget: Budget | null;
}

export interface Shampoo {
  name: string;
  brand: string;
  priceRange: string;
  rating: number;
  keyIngredient: string;
  description: string;
  suitableFor: {
    hairTypes: HairType[];
    scalpConditions: ScalpCondition[];
    symptoms: Symptom[];
    budgets: Budget[];
  };
}
