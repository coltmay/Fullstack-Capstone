import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const ResInstanceCard = ({ resinstance }) => {

    return (
        <Card >
            <CardBody>
                <p>{resinstance.date}</p>
                <Link to={`/resinstances/detail/${resinstance.id}`} >Detail</Link>
            </CardBody>
        </Card>
    );
};

export default ResInstanceCard;