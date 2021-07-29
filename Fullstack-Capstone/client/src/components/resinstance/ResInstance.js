import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const ResInstance = ({ resinstance }) => {

    const history = useHistory();

    return (
        <Card >
            <CardBody>
                <p>{resinstance.date}</p>
                <Link to={`/resinstances/detail/${resinstance.id}`} >Detail</Link>
                <button>Edit</button>
                <button>Delete</button>
            </CardBody>
        </Card>
    );
};

export default ResInstance;