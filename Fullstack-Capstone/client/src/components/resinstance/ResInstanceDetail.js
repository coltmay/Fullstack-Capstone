import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getResInstanceById } from "../../modules/resinstanceManager";
import RexCard from "../rex/RexCard";
import MealCard from "../meal/MealCard";

const ResInstanceDetail = () => {
    const [resinstance, setResinstance] = useState([]);
    const { id } = useParams();

    const getResinstance = () => {
        getResInstanceById(id).then(resinstance => setResinstance(resinstance));
    };

    useEffect(() => {
        getResinstance();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    <h1>{resinstance.date}</h1>
                    <h1>{resinstance.beforeMood}</h1>
                    <h1>{resinstance.afterMood}</h1>
                    <Link to={`/resinstances/edit/${resinstance.id}`}>Edit</Link>
                    <div>
                        <h3>Exercises</h3>
                        {resinstance.exerciseList?.map((rex) => (
                            <RexCard rex={rex} key={rex.id} />
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
                </div>
            </div>
        </div>
    );
};

export default ResInstanceDetail;