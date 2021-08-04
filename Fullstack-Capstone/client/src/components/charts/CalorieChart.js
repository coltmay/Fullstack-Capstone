import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import { getResInstancesByUser } from '../../modules/resinstanceManager';

const CaloriesChart = () => {

    const [resinstances, setResinstances] = useState([]);

    const getResinstances = () => {
        getResInstancesByUser().then(resinstances => setResinstances(resinstances));
    };

    useEffect(() => {
        getResinstances();
    }, []);

    const last20Res = resinstances.slice(0, 20);

    let dateLabels = [];
    let calorieData = [];


    last20Res.forEach(res => {
        dateLabels.push(`${new Date(res.date).getMonth() + 1}/${new Date(res.date).getDate()}/${new Date(res.date).getFullYear()}`);
    })



    last20Res.forEach(res => {
        let dayCalorie = 0;
        res.mealList.forEach(meal => {
            dayCalorie += meal.calories;
        })
        calorieData.push(dayCalorie);
    })

    const data = {
        labels: dateLabels.reverse(),
        datasets: [
            {
                label: 'Calories Over Time',
                data: calorieData.reverse(),
                fill: false,
                backgroundColor: '#FD874D',
                borderColor: '#FD874D',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: false,
                    },
                },
            ],
        },
    };

    return (
        <>
            <Line data={data} options={options} />
        </>
    );
}

export default CaloriesChart;