import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import StatCard from './components/StatCard'
import stats from './data/stat';
import ChartSection from './components/ChartSection';
import Footer from './components/Footer';
import GoalRing from './components/GoalRing';
import { Footprints, Flame, Droplet, Moon, Brain, Utensils } from 'lucide-react';

const goals = [
  { label: "Steps", value: 7000, goal: 10000, color: "#3b82f6", Icon: Footprints },
  { label: "Calories", value: 320, goal: 500, color: "#ef4444", Icon: Flame },
  { label: "Water Intake", value: 1.8, goal: 3, color: "#06b6d4", Icon: Droplet },
  { label: "Sleep Duration", value: 6.5, goal: 8, color: "#8b5cf6", Icon: Moon },
  { label: "Meditation Time", value: 15, goal: 20, color: "#10b981", Icon: Brain },
  { label: "Healthy Meals", value: 3, goal: 5, color: "#f59e0b", Icon: Utensils },
];

function App() {

  const today = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-IN", options);

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white'>
      <Header />
      <div className="text-sm text-gray-500 text-right px-6 mt-2">
        Today – {formattedDate}
      </div>
      <main className='p-6 space-y-10'>
        <section id="goals">
          <h2 className='text-xl font-semibold mb-4'>Today's Progress</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6'>
            {goals.map((goal, index) => (
              <GoalRing key={index} {...goal} />
            ))}
          </div>
        </section>

        <section id="dashboard">
          <h2 className='text-xl font-semibold mb-4'>Key Metrics</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
            {stats.map((item) => (
              <StatCard
                key={item.id} iconName={item.iconName} label={item.label} value={item.value} unit={item.unit}
              />
            ))}
          </div>
        </section>

        <section id="logs">
          <h2 className='text-xl font-semibold mb-4'>Workout Insights</h2>
          <ChartSection />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
