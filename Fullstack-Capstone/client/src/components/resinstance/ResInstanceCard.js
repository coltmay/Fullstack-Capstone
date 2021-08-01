import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText, CardTitle, CardText, CardSubtitle } from "reactstrap";


const ResInstanceCard = ({ resinstance }) => {

    var date = new Date(Date.parse(resinstance.date));

    let journalEntry = resinstance.journal;

    if (journalEntry.length > 50) {
        journalEntry = journalEntry.substring(0, 50) + "...";
    }



    return (
        <Card classNam="CardMain" >
            <CardBody>
                <CardTitle>{date.getMonth()}/{date.getDate()}/{date.getFullYear()}</CardTitle>
                <CardText>Mood Before: {resinstance.beforeMood}</CardText>
                <CardText>Mood After: {resinstance.afterMood}</CardText>
                <CardText>Weight: {resinstance.userWeight}</CardText>
                <CardText>Journal Entry: {journalEntry}</CardText>
                <Link to={`/resinstances/detail/${resinstance.id}`}><Button color="secondary">View</Button>
                </Link>
            </CardBody>
        </Card >
    );
};

export default ResInstanceCard;