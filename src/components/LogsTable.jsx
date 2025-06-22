import React from 'react'

const LogsTable = ({ logs }) => {
    return (
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-4 mt-8 overflow-x-auto'>
            <h2 className='text-lg font-semibold mb-4 text-gray-800 dark:text-white'>Workout Logs</h2>
            <table className='w-full text-left text-sm'>
                <thead>
                    <tr className='border-b border-gray-200 dark:border-gray-700'>
                        <th className='p-2'>Date</th>
                        <th className='p-2'>Activity</th>
                        <th className='p-2'>Duration (mins)</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.length > 0 ? (
                        logs.map((log) => (
                            <tr key={log.id} className='border-b border-gray-100 dark:border-gray-700'>
                                <td className='p-2'>{log.date}</td>
                                <td className='p-2'>{log.activity}</td>
                                <td className='p-2'>{log.duration}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan='3' className='p-2 text-center text-gray-500'>
                                No logs found for this view. Try Weekly / Monthly 
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default LogsTable