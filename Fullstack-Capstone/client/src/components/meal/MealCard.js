import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./MealCard.css"

const MealCard = ({ meal, deleteMealAndSetResinstance }) => {

    return (
        <Card className="mealMainCard">
            <CardBody className="mealCardBody">
                <div className="mealHeader">
                    <p className="mealName">{meal.name}</p>
                    <div>
                        <Button onClick={() => deleteMealAndSetResinstance(meal.id)} className="mealDeleteButton">Delete</Button>
                    </div>
                </div>
                <p className="mealCalories">Calories • {meal.calories}</p>
                {/* <Link to={`/meals/form/${meal.id}`} ><Button className="mealEditButton">Edit</Button></Link> */}
            </CardBody>
        </Card>
    );
};

export default MealCard;