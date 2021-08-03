import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText, CardTitle, CardText, CardSubtitle } from "reactstrap";
import "./ResInstanceCard.css";

const ResInstanceCard = ({ resinstance }) => {

    var date = new Date(Date.parse(resinstance.date));

    let journalEntry = resinstance.journal;

    if (journalEntry.length > 50) {
        journalEntry = journalEntry.substring(0, 50) + "...";
    }



    return (
        <Card className="CardMain" >
            <CardBody>
                <CardTitle className="title">{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</CardTitle>
                <div className="cardDetails">
                    <CardText className="emojiField">Mood Before: {resinstance.beforeMood}</CardText>
                    <CardText className="emojiField">Mood After: {resinstance.afterMood}</CardText>
                    <CardText>Weight: {resinstance.userWeight}</CardText>
                    <CardText>Journal Entry: {journalEntry}</CardText>
                </div>
                <Link to={`/resinstances/detail/${resinstance.id}`}><Button color="secondary">View</Button>
                </Link>
            </CardBody>
        </Card >
    );
};

export default ResInstanceCard;