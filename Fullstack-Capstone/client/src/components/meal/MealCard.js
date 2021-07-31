import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const MealCard = ({ meal }) => {

    console.log(meal)
    const history = useHistory();

    return (
        <Card >
            <CardBody>
                <p>{meal.name}</p>
                <p>{meal.calories}</p>
                <Link to={`/meals/form/${meal.id}`} >Edit</Link>
            </CardBody>
        </Card>
    );
};

export default MealCard;