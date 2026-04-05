import { Check } from 'lucide-react';

interface SelectionCardProps {
  emoji: string;
  label: string;
  selected: boolean;
  onClick: () => void;
  multiSelect?: boolean;
}

export default function SelectionCard({ emoji, label, selected, onClick, multiSelect = false }: SelectionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
        selected
          ? 'border-blue-900 bg-blue-50 shadow-lg scale-[1.02]'
          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
      }`}
    >
      {selected && (
        <div className="absolute top-3 right-3 bg-blue-900 rounded-full p-1">
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </div>
      )}
      <div className="text-4xl mb-3">{emoji}</div>
      <div className="text-sm font-semibold text-gray-800">{label}</div>
    </button>
  );
}
