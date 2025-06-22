import React, { useState } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, } from 'chart.js'
import { workoutTimeData, caloriesData } from '../data/chartData'
import ToggleView from './ToggleView'
import logs from '../data/logs'
import LogsTable from './LogsTable'
import activities from '../data/activities'
import ScrollToTop from './ScrollToTop'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const ChartSection = () => {
    const [selectedView, setSelectedView] = useState('Daily');

    const getFilteredLogs = () => {
        const today = new Date();
        return logs.filter((log) => {
            const logDate = new Date(log.date);
            const diff = (today - logDate) / (1000 * 60 * 60 * 24);

            const dateMatch = 
                (selectedView === 'Daily' && diff < 1) ||
                (selectedView === 'Weekly' && diff <= 7) ||
                (selectedView === 'Monthly' && diff <= 30);

            const activityMatch = 
                selectedActivity === 'All' || log.activity === selectedActivity;

            return dateMatch && activityMatch;
        });
    }

    const [selectedActivity, setSelectedActivity] = useState('All');

    return (
        <section className='mt-8'>
            <div className='flex flex-wrap items-center justify-between gap-4 mb-4'>
                <ToggleView onChange={setSelectedView} />
                <select 
                    value={selectedActivity} 
                    onChange={(e) => setSelectedActivity(e.target.value)}
                    className='border dark:bg-gray-800 dark:text-white rounded px-3 py-1'
                >
                    {activities.map((a) => (
                        <option key={a} value={a}>{a}</option>
                    ))}
                </select>
            </div>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>
                Showing: {selectedView} view
            </p>

            <div className='grid gap-8 md:grid-cols-2'>
                <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-4'>
                    <h2 className='text-lg font-semibold mb-4 text-gray-800 dark:text-white'>Worout Time</h2>
                    <Line data={workoutTimeData[selectedView]} />
                </div>

                <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-4'>
                    <h2 className='text-lg font-semibold mb-4 text-gray-800 dark:text-white'>Calories Burned</h2>
                    <Bar data={caloriesData[selectedView]} />
                </div>
            </div>

            <LogsTable logs={getFilteredLogs()} />
            <ScrollToTop />
        </section>
    )
}

export default ChartSection