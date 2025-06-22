export const workoutTimeData = {
    Daily: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Workout Time (mins)',
                data: [30, 45, 60, 50, 40, 70, 65],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.3)',
                tension: 0.3,
                fill: true,
            }
        ],
    },
    Weekly: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Workout Time (mins)',
                data: [320, 405, 640, 250],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.3)',
                tension: 0.3,
                fill: true,
            }
        ],
    },
    Monthly: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
            {
                label: 'Workout Time (mins)',
                data: [1200, 1350, 1500, 1600],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.3)',
                tension: 0.3,
                fill: true,
            }
        ],
    }
};

export const caloriesData = {
    Daily: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Calories Burned',
                data: [300, 500, 450, 400, 600, 700, 650],
                backgroundColor: '#f87171',
            }
        ],
    },
    Weekly: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Calories Burned',
                data: [2500, 3100, 2900, 3300],
                backgroundColor: '#f87171',
            }
        ],
    },
    Monthly: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
            {
                label: 'Calories Burned',
                data: [9800, 10200, 11250, 12000],
                backgroundColor: '#f87171',
            }
        ],
    }
};