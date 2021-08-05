import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./RexCard.css"

const RexCard = ({ rex, resinstance, deleteRexAndSetResinstance }) => {

    return (
        <Card className="rexMainCard">
            <CardBody className="rexCardBody">
                <div className="rexHeader">
                    <h4 className="rexName">{rex.exercise.name}</h4>
                    <div className="rexHeaderButtons">
                        <Link to={`/rex/edit/${resinstance.id}/${rex.id}`}><Button className="rexEdit">Edit</Button></Link>
                        <Button className="rexDelete" onClick={() => deleteRexAndSetResinstance(rex.id)}>Delete</Button>
                    </div>
                </div>
                <p className="rexWeight">Weight Lifted • {rex.weight}</p>
                <p className="rexDifficulty">Difficulty • {rex.difficulty}</p>
                <Link to={`/Rex/detail/${resinstance.id}/${rex.id}`} ><Button className="rexDetails">Details</Button>
                </Link>
                <br></br>
            </CardBody>
        </Card >
    );
};

export default RexCard;