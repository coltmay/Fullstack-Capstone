import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import { getResInstancesByUser } from '../../modules/resinstanceManager';

const WeightChart = () => {

    const [resinstances, setResinstances] = useState([]);

    const getResinstances = () => {
        getResInstancesByUser().then(resinstances => setResinstances(resinstances));
    };

    useEffect(() => {
        getResinstances();
    }, []);

    const last7Res = resinstances.slice(0, 7);

    let dateLabels = [];
    let weightData = [];

    last7Res.forEach(res => {
        dateLabels.push(`${new Date(res.date).getMonth() + 1}/${new Date(res.date).getDate()}`);
    })

    last7Res.forEach(res => {
        weightData.push(res.userWeight);
    })

    const data = {
        labels: dateLabels.reverse(),
        datasets: [
            {
                label: 'Weight Over Time',
                data: weightData.reverse(),
                fill: false,
                backgroundColor: '#fd5401',
                borderColor: '#fd5401',
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

export default WeightChart;