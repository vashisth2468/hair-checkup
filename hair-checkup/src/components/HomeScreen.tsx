import { Sparkles } from 'lucide-react';

interface HomeScreenProps {
  onStart: () => void;
}

export default function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-6 py-12">
      <div className="flex-1 flex flex-col items-center justify-center max-w-md w-full space-y-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-full">
              <Sparkles className="w-16 h-16 text-blue-900" strokeWidth={1.5} />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Hair Checkup
          </h1>

          <p className="text-xl text-blue-900 font-medium">
            Find Your Perfect Shampoo in 2 Minutes
          </p>

          <p className="text-gray-600 leading-relaxed px-4">
            Answer simple questions about your hair and scalp. We'll recommend the perfect shampoo for you — based on science, not hype.
          </p>
        </div>

        <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Hair care"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <button
        onClick={onStart}
        className="w-full max-w-md bg-blue-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
      >
        START CHECKUP
      </button>
    </div>
  );
}
