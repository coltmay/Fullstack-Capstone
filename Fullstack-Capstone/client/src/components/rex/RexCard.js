import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const RexCard = ({ rex, deleteRexAndSetResinstance }) => {

    return (
        <Card >
            <CardBody>
                <p>{rex.name}</p>
                <Link to={`/Rex/detail/${rex.id}`} >Detail</Link>
                <br></br>
                <button onClick={() => deleteRexAndSetResinstance(rex.id)}>Delete</button>
            </CardBody>
        </Card >
    );
};

export default RexCard;