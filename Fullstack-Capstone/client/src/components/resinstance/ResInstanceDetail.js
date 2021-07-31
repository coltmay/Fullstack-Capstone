import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getResInstanceById } from "../../modules/resinstanceManager";
import { deleteRex, getRexListByResInstanceId } from "../../modules/rexManager";
import RexCard from "../rex/RexCard";
import MealCard from "../meal/MealCard";

const ResInstanceDetail = () => {
    const [resinstance, setResinstance] = useState([]);
    const [rexes, setRexes] = useState([]);
    const { id } = useParams();

    var date = new Date(Date.parse(resinstance.date));

    const getResinstance = () => {
        getResInstanceById(id).then(resinstance => setResinstance(resinstance));
    };

    const getRexes = () => {
        getRexListByResInstanceId(id).then(rexes => setRexes(rexes))
    }

    const deleteRexAndSetResinstance = (rexId) => {
        deleteRex(rexId)
            .then(() => getResinstance())
    }

    useEffect(() => {
        getResinstance();
    }, []);

    useEffect(() => {
        getRexes();
    }, [resinstance])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    <h1>{date.getMonth()}/{date.getDay()}/{date.getFullYear()}</h1>
                    <h4>Mood Before: {resinstance.beforeMood}</h4>
                    <h4>Mood After: {resinstance.afterMood}</h4>
                    <Link to={`/resinstances/edit/${resinstance.id}`}>Edit</Link>
                    <div>
                        <h3>Exercises</h3>
                        {rexes.map((rex) => (
                            <RexCard rex={rex} key={rex.id} deleteRexAndSetResinstance={deleteRexAndSetResinstance} />
                        ))}
                        <Link to={`/rexexercise/${id}`}>Add Exercise</Link>
                    </div>
                    <div>
                        <h3>Meals</h3>
                        {resinstance.mealList?.map((meal) => (
                            <MealCard meal={meal} key={meal.id} />
                        ))}
                        <Link to={`/meals/form/${id}`}>Add Meal</Link>
                    </div>
                    <h2>Journal</h2>
                    <p>{resinstance.journal}</p>
                </div>
            </div>
        </div>
    );
};

export default ResInstanceDetail;