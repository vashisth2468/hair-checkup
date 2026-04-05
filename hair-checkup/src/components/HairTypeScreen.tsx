import { HairType } from '../types';
import ProgressBar from './ProgressBar';
import SelectionCard from './SelectionCard';

interface HairTypeScreenProps {
  selected: HairType | null;
  onSelect: (type: HairType) => void;
  onNext: () => void;
}

export default function HairTypeScreen({ selected, onSelect, onNext }: HairTypeScreenProps) {
  const options = [
    { id: 'wavy' as HairType, emoji: '🌊', label: 'Wavy Hair' },
    { id: 'curly' as HairType, emoji: '➰', label: 'Curly Hair' },
    { id: 'straight' as HairType, emoji: '📏', label: 'Straight Hair' },
    { id: 'combination' as HairType, emoji: '🔄', label: 'Combination Hair' }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col p-6 py-8">
      <ProgressBar current={1} total={5} />

      <div className="flex-1 flex flex-col max-w-md w-full mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-6">
          What is your hair type?
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {options.map(option => (
            <SelectionCard
              key={option.id}
              emoji={option.emoji}
              label={option.label}
              selected={selected === option.id}
              onClick={() => onSelect(option.id)}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={!selected}
          className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl disabled:shadow-none mt-auto"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
