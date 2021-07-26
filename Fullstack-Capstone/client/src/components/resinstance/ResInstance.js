import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const ResInstance = ({ resinstance }) => {

    const history = useHistory();

    return (
        <Card >
            <CardBody>
                <p>{resinstance.date}</p>
            </CardBody>
        </Card>
    );
};

export default ResInstance;