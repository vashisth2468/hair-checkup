import { useState } from 'react';
import { Star, ChevronDown, ChevronUp, RotateCcw } from 'lucide-react';
import { UserProfile, Shampoo } from '../types';
import { getWhyItWorks, getSeasonalTip } from '../shampooData';

interface ResultScreenProps {
  profile: UserProfile;
  recommendations: Shampoo[];
  onRestart: () => void;
}

export default function ResultScreen({ profile, recommendations, onRestart }: ResultScreenProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const hairTypeLabels: Record<string, string> = {
    wavy: 'Wavy Hair',
    curly: 'Curly Hair',
    straight: 'Straight Hair',
    combination: 'Combination Hair'
  };

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Hair Profile is Ready!
          </h2>

          <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full font-semibold text-sm">
            {profile.hairType ? hairTypeLabels[profile.hairType] : 'Hair Profile'}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">
            Top 3 Recommended Shampoos
          </h3>

          {recommendations.map((shampoo, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">
                      {shampoo.name}
                    </h4>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">{shampoo.brand}</p>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-blue-900 font-bold">{shampoo.priceRange}</span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(shampoo.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">{shampoo.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    {shampoo.description}
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm font-semibold text-blue-900 mb-1">
                      Key Ingredient
                    </p>
                    <p className="text-sm text-gray-700">{shampoo.keyIngredient}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => toggleExpanded(index)}
                className="w-full flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors p-4 rounded-xl"
              >
                <span className="font-semibold text-gray-900">Why This Works For You</span>
                {expandedIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {expandedIndex === index && (
                <div className="bg-gray-50 p-4 rounded-xl animate-[fadeIn_0.3s_ease-in]">
                  <p className="text-gray-700 leading-relaxed">
                    {getWhyItWorks(profile, shampoo)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg">
          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span>🌞</span> Seasonal Hair Care Tip
          </h4>
          <p className="text-gray-700 leading-relaxed">
            {getSeasonalTip(profile.scalpCondition)}
          </p>
        </div>

        <button
          onClick={onRestart}
          className="w-full bg-white border-2 border-blue-900 text-blue-900 py-4 rounded-xl font-semibold text-lg hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          START AGAIN
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
