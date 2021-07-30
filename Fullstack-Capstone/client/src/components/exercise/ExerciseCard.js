import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const ExerciseCard = ({ exercise, resinstanceid }) => {
    console.log("card", resinstanceid)

    return (
        <Card >
            <CardBody>
                <p>{exercise.name}</p>
                <Link to={`/exercise/detail/${exercise.id}`} >Detail</Link>
                <br></br>
                <Link to={`/rex/form/${resinstanceid}/${exercise.id}`} >Add To ResInstance</Link>
            </CardBody>
        </Card>
    );
};

export default ExerciseCard;