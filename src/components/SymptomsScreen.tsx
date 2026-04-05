import { Symptom } from '../types';
import ProgressBar from './ProgressBar';
import SelectionCard from './SelectionCard';

interface SymptomsScreenProps {
  selected: Symptom[];
  onToggle: (symptom: Symptom) => void;
  onNext: () => void;
}

export default function SymptomsScreen({ selected, onToggle, onNext }: SymptomsScreenProps) {
  const options = [
    { id: 'dandruff' as Symptom, emoji: '❄️', label: 'Dandruff' },
    { id: 'hairfall' as Symptom, emoji: '🍂', label: 'Hair Fall' },
    { id: 'damaged' as Symptom, emoji: '💔', label: 'Damaged Hair' },
    { id: 'dryrough' as Symptom, emoji: '🌵', label: 'Dry and Rough' },
    { id: 'lackshine' as Symptom, emoji: '✨', label: 'Lack of Shine' },
    { id: 'itchy' as Symptom, emoji: '🤧', label: 'Itchy Scalp' }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col p-6 py-8">
      <ProgressBar current={3} total={5} />

      <div className="flex-1 flex flex-col max-w-md w-full mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 mt-6">
          Select all symptoms you have
        </h2>
        <p className="text-sm text-gray-500 mb-8">You can select multiple</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {options.map(option => (
            <SelectionCard
              key={option.id}
              emoji={option.emoji}
              label={option.label}
              selected={selected.includes(option.id)}
              onClick={() => onToggle(option.id)}
              multiSelect
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={selected.length === 0}
          className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl disabled:shadow-none mt-auto"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
