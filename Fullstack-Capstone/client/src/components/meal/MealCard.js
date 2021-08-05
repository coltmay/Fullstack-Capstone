import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./MealCard.css"

const MealCard = ({ meal, deleteMealAndSetResinstance }) => {

    return (
        <Card className="mealMainCard">
            <CardBody className="mealCardBody">
                <p className="mealName">{meal.name}</p>
                <p className="mealCalories">{meal.calories}</p>
                {/* <Link to={`/meals/form/${meal.id}`} ><Button className="mealEditButton">Edit</Button></Link> */}
                <Button onClick={() => deleteMealAndSetResinstance(meal.id)} className="mealDeleteButton">Delete</Button>
            </CardBody>
        </Card>
    );
};

export default MealCard;