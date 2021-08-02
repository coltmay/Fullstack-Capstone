// import React, { useEffect, useState } from "react";
// import { Line } from 'react-chartjs-2';
// import { getResInstancesByUser } from '../../modules/resinstanceManager';

// const SquatChart = () => {

//     const [resinstances, setResinstances] = useState([]);

//     const getResinstances = () => {
//         getResInstancesByUser().then(resinstances => setResinstances(resinstances));
//     };

//     useEffect(() => {
//         getResinstances();
//     }, []);

//     const lastTenRes = resinstances.slice(0, 20);

//     let dateLabels = [];
//     let weightData = [];

//     lastTenRes.forEach(res => {
//         dateLabels.push(`${new Date(res.date).getMonth() + 1}/${new Date(res.date).getDate()}/${new Date(res.date).getFullYear()}`);
//     })

//     lastTenRes.forEach(res => {
//         weightData.push(res.userWeight);
//     })

//     const data = {
//         labels: dateLabels.reverse(),
//         datasets: [
//             {
//                 label: 'Weight Over Time',
//                 data: weightData.reverse(),
//                 fill: false,
//                 backgroundColor: '#fd5401',
//                 borderColor: 'rgba(255, 99, 132, 0.2)',
//             },
//         ],
//     };

//     const options = {
//         scales: {
//             yAxes: [
//                 {
//                     ticks: {
//                         beginAtZero: true,
//                     },
//                 },
//             ],
//         },
//     };

//     return (
//         <>
//             <Line data={data} options={options} />
//         </>
//     );
// }

// export default SquatChart;