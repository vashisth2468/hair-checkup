import { Loader2 } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex justify-center">
          <Loader2 className="w-20 h-20 text-blue-900 animate-spin" strokeWidth={2} />
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900">
            Analyzing your hair profile...
          </h2>
          <p className="text-gray-600">
            Finding the perfect shampoo recommendations for you
          </p>
        </div>

        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div className="h-full bg-blue-900 animate-[loading_2s_ease-in-out]" style={{
            animation: 'loading 2s ease-in-out forwards'
          }} />
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
