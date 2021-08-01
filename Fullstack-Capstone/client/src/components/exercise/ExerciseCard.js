import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const ExerciseCard = ({ exercise, resinstanceid }) => {

    let description = exercise.description;

    if (description.length > 250) {
        description = description.substring(0, 250) + "...";
    }


    return (
        <Card >
            <CardBody>
                <p>{exercise.name}</p>
                <p>{description}</p>
                {resinstanceid ? <Link to={`/rex/form/${resinstanceid}/${exercise.id}`} ><Button color="primary">Add To ResInstance</Button></Link> : null}
                <Link to={`/exercise/detail/${exercise.id}`}><Button color="secondary">Details</Button></Link>
            </CardBody>
        </Card>
    );
};

export default ExerciseCard;