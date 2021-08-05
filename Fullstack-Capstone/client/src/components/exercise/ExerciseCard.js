import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./ExerciseCard.css"

const ExerciseCard = ({ exercise, resinstanceid }) => {

    let description = exercise.description;

    if (description.length > 250) {
        description = description.substring(0, 250) + "...";
    }


    return (
        <Card className="exMainCard">
            <CardBody className="exCardBody">
                <p className="exName">{exercise.name}</p>
                <p className="exDescription">{description}</p>
                {resinstanceid ? <Link to={`/rex/form/${resinstanceid}/${exercise.id}`} ><Button className="exAddButton">Add To ResInstance</Button></Link> : null}
                <Link to={`/exercise/detail/${exercise.id}`}><Button className="exDetailButton">Details</Button></Link>
            </CardBody>
        </Card>
    );
};

export default ExerciseCard;