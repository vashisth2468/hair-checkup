import { Budget } from '../types';
import ProgressBar from './ProgressBar';
import SelectionCard from './SelectionCard';

interface BudgetScreenProps {
  selected: Budget | null;
  onSelect: (budget: Budget) => void;
  onNext: () => void;
}

export default function BudgetScreen({ selected, onSelect, onNext }: BudgetScreenProps) {
  const options = [
    { id: 'under200' as Budget, emoji: '💰', label: 'Under ₹200' },
    { id: '200to500' as Budget, emoji: '💳', label: '₹200 to ₹500' },
    { id: 'above500' as Budget, emoji: '👑', label: 'Above ₹500' }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col p-6 py-8">
      <ProgressBar current={5} total={5} />

      <div className="flex-1 flex flex-col max-w-md w-full mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-6">
          Your shampoo budget per month?
        </h2>

        <div className="space-y-4 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${
                selected === option.id
                  ? 'border-blue-900 bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <div className="text-4xl">{option.emoji}</div>
              <div className="text-lg font-semibold text-gray-800">{option.label}</div>
            </button>
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={!selected}
          className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl disabled:shadow-none mt-auto"
        >
          SEE RESULTS
        </button>
      </div>
    </div>
  );
}
