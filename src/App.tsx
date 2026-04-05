import { useState, useEffect } from 'react';
import { UserProfile, HairType, ScalpCondition, Symptom, Lifestyle, Budget } from './types';
import { getRecommendations } from './shampooData';
import HomeScreen from './components/HomeScreen';
import HairTypeScreen from './components/HairTypeScreen';
import ScalpConditionScreen from './components/ScalpConditionScreen';
import SymptomsScreen from './components/SymptomsScreen';
import LifestyleScreen from './components/LifestyleScreen';
import BudgetScreen from './components/BudgetScreen';
import LoadingScreen from './components/LoadingScreen';
import ResultScreen from './components/ResultScreen';

type Screen = 'home' | 'hairType' | 'scalp' | 'symptoms' | 'lifestyle' | 'budget' | 'loading' | 'result';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [profile, setProfile] = useState<UserProfile>({
    hairType: null,
    scalpCondition: null,
    symptoms: [],
    lifestyle: null,
    budget: null
  });

  useEffect(() => {
    if (currentScreen === 'loading') {
      const timer = setTimeout(() => {
        setCurrentScreen('result');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleStart = () => {
    setCurrentScreen('hairType');
  };

  const handleHairTypeSelect = (hairType: HairType) => {
    setProfile({ ...profile, hairType });
  };

  const handleScalpSelect = (scalpCondition: ScalpCondition) => {
    setProfile({ ...profile, scalpCondition });
  };

  const handleSymptomToggle = (symptom: Symptom) => {
    const newSymptoms = profile.symptoms.includes(symptom)
      ? profile.symptoms.filter(s => s !== symptom)
      : [...profile.symptoms, symptom];
    setProfile({ ...profile, symptoms: newSymptoms });
  };

  const handleLifestyleSelect = (lifestyle: Lifestyle) => {
    setProfile({ ...profile, lifestyle });
  };

  const handleBudgetSelect = (budget: Budget) => {
    setProfile({ ...profile, budget });
  };

  const handleRestart = () => {
    setProfile({
      hairType: null,
      scalpCondition: null,
      symptoms: [],
      lifestyle: null,
      budget: null
    });
    setCurrentScreen('home');
  };

  const recommendations = getRecommendations(profile);

  return (
    <div className="min-h-screen">
      {currentScreen === 'home' && <HomeScreen onStart={handleStart} />}

      {currentScreen === 'hairType' && (
        <HairTypeScreen
          selected={profile.hairType}
          onSelect={handleHairTypeSelect}
          onNext={() => setCurrentScreen('scalp')}
        />
      )}

      {currentScreen === 'scalp' && (
        <ScalpConditionScreen
          selected={profile.scalpCondition}
          onSelect={handleScalpSelect}
          onNext={() => setCurrentScreen('symptoms')}
        />
      )}

      {currentScreen === 'symptoms' && (
        <SymptomsScreen
          selected={profile.symptoms}
          onToggle={handleSymptomToggle}
          onNext={() => setCurrentScreen('lifestyle')}
        />
      )}

      {currentScreen === 'lifestyle' && (
        <LifestyleScreen
          selected={profile.lifestyle}
          onSelect={handleLifestyleSelect}
          onNext={() => setCurrentScreen('budget')}
        />
      )}

      {currentScreen === 'budget' && (
        <BudgetScreen
          selected={profile.budget}
          onSelect={handleBudgetSelect}
          onNext={() => setCurrentScreen('loading')}
        />
      )}

      {currentScreen === 'loading' && <LoadingScreen />}

      {currentScreen === 'result' && (
        <ResultScreen
          profile={profile}
          recommendations={recommendations}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
