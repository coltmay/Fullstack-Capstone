import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const ExerciseCard = ({ exercise }) => {

    const history = useHistory();

    return (
        <Card >
            <CardBody>
                <p>{exercise.name}</p>
                <Link to={`/exercise/detail/${exercise.id}`} >Detail</Link>
            </CardBody>
        </Card>
    );
};

export default ExerciseCard;