import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const MealCard = ({ meal, deleteMealAndSetResinstance }) => {

    return (
        <Card >
            <CardBody>
                <p>{meal.name}</p>
                <p>{meal.calories}</p>
                <Link to={`/meals/form/${meal.id}`} ><button class="btn btn-primary btn btn-secondary">Edit</button></Link>
                <button onClick={() => deleteMealAndSetResinstance(meal.id)} class="btn btn-primary btn btn-secondary">Delete</button>
            </CardBody>
        </Card>
    );
};

export default MealCard;