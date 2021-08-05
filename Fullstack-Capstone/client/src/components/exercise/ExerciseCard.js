import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./ExerciseCard.css"

const ExerciseCard = ({ exercise, resinstanceid }) => {

    let description = exercise.description;

    if (description.length > 575) {
        description = description.substring(0, 575) + "...";
    }


    return (
        <Card className="exMainCard">
            <CardBody className="exCardBody">
                <p className="exName">{exercise.name}</p>
                <p className="exDescription">{description}</p>
                <div className="exButtonHolder">
                    {resinstanceid ? <Link to={`/rex/form/${resinstanceid}/${exercise.id}`} ><Button className="exAddButton">Add To ResInstance</Button></Link> : null}
                    <br></br><Link to={`/exercise/detail/${exercise.id}`}><Button className="exDetailButton">Details</Button></Link></div>
            </CardBody>
        </Card>
    );
};

export default ExerciseCard;