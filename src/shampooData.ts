import { Shampoo, UserProfile } from './types';

export const shampoos: Shampoo[] = [
  {
    name: 'Anti-Dandruff Shampoo',
    brand: 'Head & Shoulders',
    priceRange: '₹150-₹250',
    rating: 4.5,
    keyIngredient: 'Pyrithione Zinc',
    description: 'Clinically proven to fight dandruff and relieve itchy scalp',
    suitableFor: {
      hairTypes: ['straight', 'wavy', 'curly', 'combination'],
      scalpConditions: ['oily', 'normal', 'sensitive'],
      symptoms: ['dandruff', 'itchy'],
      budgets: ['under200', '200to500']
    }
  },
  {
    name: 'Intense Repair Shampoo',
    brand: 'Dove',
    priceRange: '₹180-₹300',
    rating: 4.3,
    keyIngredient: 'Keratin Repair Actives',
    description: 'Deeply nourishes and repairs damaged hair from within',
    suitableFor: {
      hairTypes: ['straight', 'wavy', 'curly', 'combination'],
      scalpConditions: ['dry', 'normal'],
      symptoms: ['damaged', 'dryrough', 'lackshine'],
      budgets: ['under200', '200to500']
    }
  },
  {
    name: 'Strong & Long Shampoo',
    brand: 'Clinic Plus',
    priceRange: '₹100-₹180',
    rating: 4.2,
    keyIngredient: 'Milk Protein',
    description: 'Reduces hair fall and strengthens hair from roots',
    suitableFor: {
      hairTypes: ['straight', 'wavy', 'combination'],
      scalpConditions: ['normal', 'oily'],
      symptoms: ['hairfall', 'lackshine'],
      budgets: ['under200']
    }
  },
  {
    name: 'Anti-Hair Fall Shampoo',
    brand: 'Himalaya',
    priceRange: '₹140-₹220',
    rating: 4.4,
    keyIngredient: 'Bhringraj & Saw Palmetto',
    description: 'Natural herbs strengthen hair roots and reduce breakage',
    suitableFor: {
      hairTypes: ['straight', 'wavy', 'curly', 'combination'],
      scalpConditions: ['normal', 'sensitive', 'dry'],
      symptoms: ['hairfall', 'dryrough'],
      budgets: ['under200', '200to500']
    }
  },
  {
    name: 'Bio Kelp Protein Shampoo',
    brand: 'Biotique',
    priceRange: '₹160-₹280',
    rating: 4.3,
    keyIngredient: 'Sea Kelp & Peppermint',
    description: 'Natural formula for healthy scalp and lustrous hair',
    suitableFor: {
      hairTypes: ['wavy', 'curly', 'combination'],
      scalpConditions: ['oily', 'normal', 'sensitive'],
      symptoms: ['dandruff', 'itchy', 'lackshine'],
      budgets: ['under200', '200to500']
    }
  },
  {
    name: 'Keratin Smooth Shampoo',
    brand: 'Tresemme',
    priceRange: '₹280-₹450',
    rating: 4.5,
    keyIngredient: 'Keratin & Argan Oil',
    description: 'Salon-quality smoothness and frizz control for up to 72 hours',
    suitableFor: {
      hairTypes: ['wavy', 'curly', 'combination'],
      scalpConditions: ['dry', 'normal'],
      symptoms: ['damaged', 'dryrough', 'lackshine'],
      budgets: ['200to500']
    }
  },
  {
    name: 'Advanced Hair Fall Solution',
    brand: 'Pantene',
    priceRange: '₹180-₹320',
    rating: 4.4,
    keyIngredient: 'Pro-Vitamin B5 & Fermented Rice Water',
    description: 'Reduces hair fall and strengthens every strand',
    suitableFor: {
      hairTypes: ['straight', 'wavy', 'combination'],
      scalpConditions: ['normal', 'oily'],
      symptoms: ['hairfall', 'lackshine', 'damaged'],
      budgets: ['under200', '200to500']
    }
  },
  {
    name: 'Thick & Long Shampoo',
    brand: 'Sunsilk',
    priceRange: '₹120-₹200',
    rating: 4.1,
    keyIngredient: 'Biotin & Castor Oil',
    description: 'For visibly thicker and longer hair',
    suitableFor: {
      hairTypes: ['straight', 'wavy', 'combination'],
      scalpConditions: ['normal', 'oily'],
      symptoms: ['hairfall', 'lackshine'],
      budgets: ['under200']
    }
  },
  {
    name: 'Bringha Hair Cleanser',
    brand: 'Indulekha',
    priceRange: '₹320-₹480',
    rating: 4.6,
    keyIngredient: 'Ayurvedic Bringharaj',
    description: 'Ayurvedic solution for hair fall and scalp health',
    suitableFor: {
      hairTypes: ['straight', 'wavy', 'curly', 'combination'],
      scalpConditions: ['sensitive', 'dry', 'normal'],
      symptoms: ['hairfall', 'itchy', 'dandruff'],
      budgets: ['200to500', 'above500']
    }
  },
  {
    name: 'Onion Hair Fall Shampoo',
    brand: 'Mamaearth',
    priceRange: '₹280-₹450',
    rating: 4.5,
    keyIngredient: 'Onion Oil & Plant Keratin',
    description: 'Natural, toxin-free formula for stronger hair',
    suitableFor: {
      hairTypes: ['straight', 'wavy', 'curly', 'combination'],
      scalpConditions: ['sensitive', 'normal', 'dry'],
      symptoms: ['hairfall', 'damaged', 'lackshine'],
      budgets: ['200to500', 'above500']
    }
  },
  {
    name: 'Tea Tree Oil Shampoo',
    brand: 'Mamaearth',
    priceRange: '₹280-₹450',
    rating: 4.4,
    keyIngredient: 'Tea Tree Oil & Ginger Oil',
    description: 'Controls dandruff and soothes itchy scalp naturally',
    suitableFor: {
      hairTypes: ['straight', 'wavy', 'curly', 'combination'],
      scalpConditions: ['oily', 'sensitive'],
      symptoms: ['dandruff', 'itchy', 'oily'],
      budgets: ['200to500', 'above500']
    }
  },
  {
    name: 'Nourishing Shampoo',
    brand: 'Dove',
    priceRange: '₹160-₹280',
    rating: 4.3,
    keyIngredient: 'Nutritive Serum',
    description: 'Daily nourishment for soft and smooth hair',
    suitableFor: {
      hairTypes: ['straight', 'wavy', 'combination'],
      scalpConditions: ['normal', 'dry'],
      symptoms: ['dryrough', 'lackshine'],
      budgets: ['under200', '200to500']
    }
  },
  {
    name: 'Argan Oil Shampoo',
    brand: 'Tresemme',
    priceRange: '₹320-₹500',
    rating: 4.6,
    keyIngredient: 'Moroccan Argan Oil',
    description: 'Professional care for silky smooth and glossy hair',
    suitableFor: {
      hairTypes: ['curly', 'wavy', 'combination'],
      scalpConditions: ['dry', 'normal'],
      symptoms: ['damaged', 'dryrough', 'lackshine'],
      budgets: ['200to500', 'above500']
    }
  },
  {
    name: 'Lively Clean Shampoo',
    brand: 'Pantene',
    priceRange: '₹140-₹240',
    rating: 4.2,
    keyIngredient: 'Pro-Vitamin Complex',
    description: 'Keeps hair fresh and bouncy all day',
    suitableFor: {
      hairTypes: ['straight', 'wavy', 'combination'],
      scalpConditions: ['oily', 'normal'],
      symptoms: ['lackshine'],
      budgets: ['under200', '200to500']
    }
  },
  {
    name: 'Watercress & Soya Protein Shampoo',
    brand: 'Biotique',
    priceRange: '₹180-₹320',
    rating: 4.4,
    keyIngredient: 'Watercress & Soya Protein',
    description: 'Strengthens fine and thinning hair naturally',
    suitableFor: {
      hairTypes: ['straight', 'wavy', 'combination'],
      scalpConditions: ['normal', 'sensitive'],
      symptoms: ['hairfall', 'lackshine', 'damaged'],
      budgets: ['under200', '200to500']
    }
  }
];

export function getRecommendations(profile: UserProfile): Shampoo[] {
  const scored = shampoos.map(shampoo => {
    let score = 0;

    if (profile.hairType && shampoo.suitableFor.hairTypes.includes(profile.hairType)) {
      score += 3;
    }

    if (profile.scalpCondition && shampoo.suitableFor.scalpConditions.includes(profile.scalpCondition)) {
      score += 3;
    }

    const symptomMatches = profile.symptoms.filter(symptom =>
      shampoo.suitableFor.symptoms.includes(symptom)
    ).length;
    score += symptomMatches * 2;

    if (profile.budget && shampoo.suitableFor.budgets.includes(profile.budget)) {
      score += 2;
    }

    return { shampoo, score };
  });

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, 3).map(item => item.shampoo);
}

export function getSeasonalTip(scalpCondition: string | null): string {
  const season = new Date().getMonth();
  const isSummer = season >= 3 && season <= 6;

  if (isSummer) {
    if (scalpCondition === 'oily') {
      return 'Summer Tip: Wash your hair every alternate day to manage excess oil and sweat. Use lukewarm water.';
    } else if (scalpCondition === 'dry') {
      return 'Summer Tip: Protect your hair from sun damage. Apply a leave-in conditioner and cover with a scarf when outdoors.';
    } else {
      return 'Summer Tip: Stay hydrated and wash your hair regularly to remove sweat and pollution. Use a mild shampoo.';
    }
  } else {
    if (scalpCondition === 'oily') {
      return 'Winter Tip: You can reduce washing frequency to 2-3 times a week. Use slightly warm water, not hot.';
    } else if (scalpCondition === 'dry') {
      return 'Winter Tip: Deep condition weekly and avoid hot water. Use a humidifier indoors to prevent scalp dryness.';
    } else {
      return 'Winter Tip: Moisturize your scalp regularly. Avoid excessive heat styling and drink plenty of water.';
    }
  }
}

export function getWhyItWorks(profile: UserProfile, shampoo: Shampoo): string {
  const reasons: string[] = [];

  if (profile.hairType) {
    const hairTypeDesc: Record<string, string> = {
      wavy: 'wavy hair patterns',
      curly: 'curly and textured hair',
      straight: 'straight hair strands',
      combination: 'mixed hair textures'
    };
    reasons.push(`formulated for ${hairTypeDesc[profile.hairType]}`);
  }

  if (profile.symptoms.length > 0) {
    const symptomDesc: Record<string, string> = {
      dandruff: 'anti-dandruff',
      hairfall: 'hair strengthening',
      damaged: 'repair',
      dryrough: 'moisturizing',
      lackshine: 'shine-enhancing',
      itchy: 'soothing'
    };
    const mainSymptom = profile.symptoms[0];
    reasons.push(`${symptomDesc[mainSymptom]} properties`);
  }

  return `This shampoo is perfect for you because it contains ${shampoo.keyIngredient}, which is known for its ${reasons.join(' and ')}. ${shampoo.description}`;
}
