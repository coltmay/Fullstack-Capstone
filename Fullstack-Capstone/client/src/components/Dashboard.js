import React, { useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ResInstanceCard from '../components/resinstance/ResInstanceCard';
import { getResInstancesByUser } from "../modules/resinstanceManager";

import WeightChart from "./charts/WeightChart";
import profileImage from "../img/charles_mingus.png"

import "./Dashboard.css"

const Dashboard = () => {
    const [resinstances, setResinstances] = useState([]);

    const getResinstances = () => {
        getResInstancesByUser().then(resinstances => setResinstances(resinstances));
    };

    const lastThree = resinstances.slice(0, 3)

    const user = resinstances[0]?.user;
    console.log(user)
    console.log(user?.AvatarUrl)


    let calorieCount = 0;
    resinstances[0]?.mealList.forEach(meal => {
        calorieCount += meal.calories;
    });

    useEffect(() => {
        getResinstances();
    }, []);

    return (
        <>
            <div className="dashContainer">
                <div className="userPanel">
                    <div className="imageContainer">
                        <img className="profilePicture" src={user?.avatarUrl} alt="profile pic"></img>
                    </div>
                    <h2 className="userName">{user?.firstName} {user?.lastName}</h2>
                    <div className="detailContainer">
                        <h6><b>Last ResInstances •</b> {`${resinstances[0]?.date.slice(5, 7)}/${resinstances[0]?.date.slice(8, 10)}/${resinstances[0]?.date.slice(0, 4)}`}</h6>
                        <h6><b>Total ResInstances •</b> {resinstances.length}</h6>
                        <h6><b>Current Weight •</b> {resinstances[0]?.userWeight} lbs</h6>
                        <h6><b>Last Calorie Count •</b> {calorieCount} calories</h6>

                    </div>
                    <WeightChart />
                </div>
                <div className="resinstanceList container">
                    <div className="row justify-content-center">
                        <Link className="add-button" to="resinstances/form" ><Button color="primary">Add</Button></Link>
                        {lastThree.map((resinstance) => (
                            <ResInstanceCard resinstance={resinstance} key={resinstance.id} />
                        ))}
                    </div>
                    <div className="viewButtonHolder">
                        <Link to="myresinstances/" ><Button color="primary">View All</Button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;