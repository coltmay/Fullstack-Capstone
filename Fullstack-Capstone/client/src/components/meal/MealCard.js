import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";


const MealCard = ({ meal, deleteMealAndSetResinstance }) => {

    return (
        <Card >
            <CardBody>
                <p>{meal.name}</p>
                <p>{meal.calories}</p>
                <Link to={`/meals/form/${meal.id}`} ><Button color="primary">Edit</Button></Link>
                <Button onClick={() => deleteMealAndSetResinstance(meal.id)} color="danger">Delete</Button>
            </CardBody>
        </Card>
    );
};

export default MealCard;