import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const RexCard = ({ rex, resinstance, deleteRexAndSetResinstance }) => {

    return (
        <Card >
            <CardBody>
                <h4>{rex.exercise.name}</h4>
                <p>Weight: {rex.weight}</p>
                <p>Difficulty: {rex.difficulty}</p>
                <Link to={`/Rex/detail/${resinstance.id}/${rex.id}`} ><Button color="secondary">Details</Button>
                </Link>
                <br></br>
                <Link to={`/rex/edit/${resinstance.id}/${rex.id}`}><Button color="primary">Edit</Button>
                </Link>
                <Button color="danger" onClick={() => deleteRexAndSetResinstance(rex.id)}>Delete</Button>
            </CardBody>
        </Card >
    );
};

export default RexCard;