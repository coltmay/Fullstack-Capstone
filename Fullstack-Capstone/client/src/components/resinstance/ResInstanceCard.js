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

    let totalCalories = 0;

    resinstance.mealList.forEach(meal => {
        totalCalories += meal.calories;
    });

    return (
        <Card className="CardMain" >
            <CardBody>
                <CardTitle className="title">{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</CardTitle>
                <div className="cardDetails">
                    <div className="detailHolder">
                        <div className="beforeHolder">
                            <CardText className="emojiHeader">Mood Before</CardText>
                            <CardText className="emojiField">{resinstance.beforeMood}</CardText>
                        </div>
                        <div className="afterHolder">
                            <CardText className="emojiHeader">Mood After</CardText>
                            <CardText className="emojiField">{resinstance.afterMood}</CardText>
                        </div>
                        <div className="weightHolder">
                            <CardText className="weightHeader">My Weight</CardText>
                            <CardText className="weightField">{resinstance.userWeight} lbs</CardText>
                        </div>
                        <div className="calorieHolder">
                            <CardText className="weightHeader">Calories Eaten</CardText>
                            <CardText className="weightField">{totalCalories}</CardText>
                        </div>
                        <div className="calorieHolder">
                            <CardText className="weightHeader">Exercises Performed</CardText>
                            <CardText className="weightField">{resinstance.exerciseList.length}</CardText>
                        </div>
                    </div>
                </div>
                <CardText className="journalHeader">Journal Entry</CardText>
                <CardText className="journalField">{journalEntry}</CardText>
                <div className="linkHolder">
                    <Link className="viewButton" to={`/resinstances/detail/${resinstance.id}`}><Button className="detail-button">View Details</Button></Link>
                </div>
            </CardBody>
        </Card >
    );
};

export default ResInstanceCard;