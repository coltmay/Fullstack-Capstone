import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const MealCard = ({ meal }) => {

    const history = useHistory();

    return (
        <Card >
            <CardBody>
                <p>{meal.name}</p>
                <Link to={`/resinstances/detail/${meal.id}`} >Detail</Link>
            </CardBody>
        </Card>
    );
};

export default MealCard;