import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const ExerciseCard = ({ exercise }) => {


    return (
        <Card >
            <CardBody>
                <p>{exercise.name}</p>
                <Link to={`/exercise/detail/${exercise.id}`} >Detail</Link>
                <button onClick={null} >Add To ResInstance</button>
            </CardBody>
        </Card>
    );
};

export default ExerciseCard;