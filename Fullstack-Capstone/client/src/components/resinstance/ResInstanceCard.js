import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const ResInstanceCard = ({ resinstance }) => {

    var date = new Date(Date.parse(resinstance.date));

    let journalEntry = resinstance.journal;

    if (journalEntry.length > 50) {
        journalEntry = journalEntry.substring(0, 50) + "...";
    }



    return (
        <Card >
            <CardBody>
                <h3>{date.getMonth()}/{date.getDay()}/{date.getFullYear()}</h3>
                <h5>Mood Before: {resinstance.beforeMood}</h5>
                <h5>Mood After: {resinstance.afterMood}</h5>
                <h5>Weight: {resinstance.userWeight}</h5>
                <h5>Journal Entry: {journalEntry}</h5>

                <Link to={`/resinstances/detail/${resinstance.id}`} >Details</Link>
            </CardBody>
        </Card >
    );
};

export default ResInstanceCard;