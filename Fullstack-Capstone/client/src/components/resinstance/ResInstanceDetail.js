import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getResInstanceById, deleteResInstance } from "../../modules/resinstanceManager";
import { getRexListByResInstanceId, deleteRex } from "../../modules/rexManager";
import { getMealListByResInstanceId, deleteMeal } from "../../modules/mealManager";
import RexCard from "../rex/RexCard";
import MealCard from "../meal/MealCard";

const ResInstanceDetail = () => {
    const [resinstance, setResinstance] = useState([]);
    const [meals, setMeals] = useState([]);
    const [rexes, setRexes] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    console.log(rexes)

    var date = new Date(Date.parse(resinstance.date));

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

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    <h1>{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</h1>
                    <h4>Mood Before: {resinstance.beforeMood}</h4>
                    <h4>Mood After: {resinstance.afterMood}</h4>
                    <Link to={`/resinstances/edit/${resinstance.id}`}><Button color="primary">Edit</Button>
                    </Link>
                    <Button color="danger" onClick={() => deleteCurrentResInstance(id)}>Delete</Button>
                    <div>
                        <h3>Exercises</h3>
                        {rexes.map((rex) => (
                            <RexCard rex={rex} key={rex.id} resinstance={resinstance} deleteRexAndSetResinstance={deleteRexAndSetResinstance} />
                        ))}
                        <Link to={`/rexexercise/${id}`}><Button color="primary">Add Exercise</Button>
                        </Link>
                    </div>
                    <div>
                        <h3>Meals</h3>
                        {meals.map((meal) => (
                            <MealCard meal={meal} key={meal.id} deleteMealAndSetResinstance={deleteMealAndSetResinstance} />
                        ))}
                        <Link to={`/meals/form/${id}`}><Button color="primary">Add Meal</Button>
                        </Link>
                    </div>
                    <h2>Journal</h2>
                    <p>{resinstance.journal}</p>
                    <Button color="secondary" onClick={() => history.push(`/myresinstances`)}>Back</Button>
                </div>
            </div>
        </div>
    );
};

export default ResInstanceDetail;