import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const RexCard = ({ rex }) => {

    const history = useHistory();
    console.log(rex)
    return (
        <Card >
            <CardBody>
                <p>{rex.name}</p>
                <Link to={`/Rex/detail/${rex.id}`} >Detail</Link>
            </CardBody>
        </Card>
    );
};

export default RexCard;