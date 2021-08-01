import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const ExerciseCard = ({ exercise, resinstanceid }) => {

    console.log(exercise)

    let description = exercise.description;

    if (description.length > 250) {
        description = description.substring(0, 250) + "...";
    }


    return (
        <Card >
            <CardBody>
                <p>{exercise.name}</p>
                <p>{description}</p>
                <Link to={`/exercise/detail/${exercise.id}`}><button class="btn btn-primary btn btn-secondary">Detail</button></Link>
                <br></br>
                <Link to={`/rex/form/${resinstanceid}/${exercise.id}`} ><button class="btn btn-primary btn btn-secondary">Add To ResInstance</button></Link>
            </CardBody>
        </Card>
    );
};

export default ExerciseCard;