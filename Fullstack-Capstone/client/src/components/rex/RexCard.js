import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const Rex = ({ rex }) => {

    const history = useHistory();

    return (
        <Card >
            <CardBody>
                <p>{rex.date}</p>
                <Link to={`/Rex/detail/${Rex.id}`} >Detail</Link>
            </CardBody>
        </Card>
    );
};

export default Rex;