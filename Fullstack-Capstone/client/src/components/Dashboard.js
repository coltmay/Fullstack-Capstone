import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ResInstanceCard from '../components/resinstance/ResInstanceCard';
import { getResInstancesByUser } from "../modules/resinstanceManager";
import "./Dashboard.css"
import profileImage from "../img/charles_mingus.png"
const Dashboard = () => {
    const [resinstances, setResinstances] = useState([]);

    const getResinstances = () => {
        getResInstancesByUser().then(resinstances => setResinstances(resinstances));
    };

    const user = resinstances[0]?.user;

    console.log(resinstances)

    useEffect(() => {
        getResinstances();
    }, []);

    return (
        <>
            <div className="dashContainer">
                <div className="userPanel">
                    <div className="imageContainer">
                        <img className="profilePicture" src={profileImage} alt="profile pic"></img>
                    </div>
                    <h2 className="userName">{user?.firstName} {user?.lastName}</h2>
                    <h6>Total ResInstances: {resinstances.length}</h6>
                    <h6>Weight: {resinstances[0]?.userWeight}</h6>
                </div>
                <div className="resinstanceList container">
                    <div className="row justify-content-center">
                        <Link className="add-button" to="resinstances/form" ><Button color="primary">Add</Button></Link>
                        {resinstances.map((resinstance) => (
                            <ResInstanceCard resinstance={resinstance} key={resinstance.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;