import React, { useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ResInstanceCard from '../components/resinstance/ResInstanceCard';
import { getResInstancesByUser } from "../modules/resinstanceManager";
import { getCurrentUser } from "../modules/authManager";
import WeightChart from "./charts/WeightChart";
import CaloriesChart from "./charts/CalorieChart";
import calltoActionArrow from "../img/callToActionArrow.png"
import "./Dashboard.css"

const Dashboard = () => {
    const [resinstances, setResinstances] = useState([]);
    const [user, setUser] = useState();

    const getResinstances = () => {
        getResInstancesByUser().then(resinstances => setResinstances(resinstances));
    };

    const getUser = () => {
        getCurrentUser().then(user => setUser(user))
    }

    const lastThree = resinstances.slice(0, 3)

    let calorieCount = 0;
    resinstances[0]?.mealList.forEach(meal => {
        calorieCount += meal.calories;
    });

    useEffect(() => {
        getResinstances();
        getUser();
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
                        <h6><b>Last ResInstance •</b> {resinstances[0] ? `${resinstances[0]?.date.slice(5, 7)}/${resinstances[0]?.date.slice(8, 10)}/${resinstances[0]?.date.slice(0, 4)}` : 'None'}</h6>
                        <h6><b>Total ResInstances •</b> {resinstances.length}</h6>
                        <h6><b>Last Weigh-In •</b> {resinstances[0]?.userWeight} lbs</h6>
                        <h6><b>Last Calorie Count •</b> {calorieCount} calories</h6>

                    </div>
                    <div className="weightChartHolder">
                        <WeightChart />
                    </div>
                    <div className="calorieChartHolder">
                        <CaloriesChart className="calorieChart" />
                    </div>
                </div>
                <div className="resinstanceList container">
                    <div className="row justify-content-center">
                        <Link className="add-button" to="resinstances/form" ><Button className="primary">Add</Button></Link>
                        {resinstances.length === 0 ?
                            <>
                                {/* <img className="callToActionArrow" src={calltoActionArrow} alt="arrow"></img> */}
                                <p className="callToAction">You don't have any ResInstances yet.<br></br><br></br>Let's change that.</p>
                            </>

                            : null}
                        {lastThree.map((resinstance) => (
                            <ResInstanceCard resinstance={resinstance} key={resinstance.id} />
                        ))}
                        <div className="viewButtonHolder">
                            {resinstances[0] ? <Link to="myresinstances" ><Button className="primary">View All</Button></Link> : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;