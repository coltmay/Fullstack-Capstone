import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getResInstanceById, deleteResInstance } from "../../modules/resinstanceManager";
import { getRexListByResInstanceId, deleteRex } from "../../modules/rexManager";
import { getMealListByResInstanceId, deleteMeal } from "../../modules/mealManager";
import RexCard from "../rex/RexCard";
import MealCard from "../meal/MealCard";
import "../resinstance/ResInstanceDetail.css"

const ResInstanceDetail = () => {
    const [resinstance, setResinstance] = useState([]);
    const [meals, setMeals] = useState([]);
    const [rexes, setRexes] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    var date = new Date(Date.parse(resinstance.date));
    var totalCalories = 0;

    resinstance.mealList?.forEach(meal => {
        totalCalories += meal.calories;
    });

    const getResinstance = () => {
        getResInstanceById(id).then(resinstance => setResinstance(resinstance));
    };

    const getRexes = () => {
        getRexListByResInstanceId(id).then(rexes => setRexes(rexes))
    }

    const getMeals = () => {
        getMealListByResInstanceId(id).then(meals => setMeals(meals))
    }

    const deleteCurrentResInstance = () => {
        deleteResInstance(id).then((p) => {
            history.push(`/myresinstances`)
        });
    }

    const deleteRexAndSetResinstance = (rexId) => {
        deleteRex(rexId)
            .then(() => getResinstance())
    }

    const deleteMealAndSetResinstance = (mealId) => {
        deleteMeal(mealId)
            .then(() => getResinstance())
    }

    useEffect(() => {
        getResinstance();
    }, []);

    useEffect(() => {
        getRexes();
        getMeals();
    }, [resinstance])

    console.log(resinstance)

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6 dresizer">
                    <div className="DheaderBin">
                        <img className="DprofPic" src={resinstance.user?.avatarUrl} alt="profile picture"></img>
                        <h1 className="DdetailTitle">{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</h1>
                    </div>
                    <div className="dButtonHolder">
                        <Link to={`/resinstances/edit/${resinstance.id}`}><Button className="dEditButton">Edit</Button></Link>
                        <Button className="dDeleteButton" onClick={() => deleteCurrentResInstance(id)}>Delete</Button>
                    </div>
                    <div>
                        <div className="DdetailHolder">
                            <div className="DemojiHolder">
                                <div className="DbeforeHolder">
                                    <p className="DemojiHeader">Mood Before</p>
                                    <p className="DemojiField">{resinstance.beforeMood}</p>
                                </div>
                                <div className="DafterHolder">
                                    <p className="DemojiHeader">Mood After</p>
                                    <p className="DemojiField">{resinstance.afterMood}</p>
                                </div>
                            </div>
                            <div className="DweightcalHolder">
                                <div className="DweightBin">
                                    <p className="DweightHeader">My Weight</p>
                                    <p className="DweightField">{resinstance.userWeight} lbs</p>
                                </div>
                                <div className="DcalorieBin">
                                    <p className="DcalorieHeader">Calories</p>
                                    <p className="DcalorieField">{totalCalories}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="secondaryDetails">
                        <div className="dExerciseBin">
                            <p className="dExerciseHeader">Exercises</p>
                            {rexes.map((rex) => (
                                <RexCard rex={rex} key={rex.id} resinstance={resinstance} deleteRexAndSetResinstance={deleteRexAndSetResinstance} />
                            ))}
                            <div className="dButtonBox">
                                <Link to={`/rexexercise/${id}`}><Button className="resdetailAddExerciseButton">Add Exercise</Button></Link>
                            </div>
                        </div>
                        <div className="dMealBin">
                            <p className="dMealHeader">Meals</p>
                            {meals.map((meal) => (
                                <MealCard meal={meal} key={meal.id} deleteMealAndSetResinstance={deleteMealAndSetResinstance} />
                            ))}
                            <div className="dButtonBox">
                                <Link to={`/meals/form/${id}`}><Button className="dMealButton">Add Meal</Button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="journalBin">
                        <p className="dJournalHeader">Journal</p>
                        <p className="dJournalEntry">{resinstance.journal}</p>
                        <div className="dBackButtonHolder">
                            <Button className="dBackButton" onClick={() => history.push(`/myresinstances`)}>Back</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ResInstanceDetail;