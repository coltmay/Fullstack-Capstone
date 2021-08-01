import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const RexCard = ({ rex, resinstance, deleteRexAndSetResinstance }) => {

    return (
        <Card >
            <CardBody>
                <h4>{rex.exercise.name}</h4>
                <p>Weight: {rex.weight}</p>
                <p>Difficulty: {rex.difficulty}</p>
                <Link to={`/Rex/detail/${rex.id}`} >Detail</Link>
                <br></br>
                <Link to={`/rex/edit/${resinstance.id}/${rex.id}`}>Edit</Link>
                <button onClick={() => deleteRexAndSetResinstance(rex.id)}>Delete</button>
            </CardBody>
        </Card >
    );
};

export default RexCard;