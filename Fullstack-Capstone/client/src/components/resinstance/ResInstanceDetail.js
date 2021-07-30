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
                    <Link to={`/resinstances/edit/${resinstance.id}`}>Edit</Link>
                    <div>
                        {resinstance.exerciseList?.map((rex) => (
                            <RexCard rex={rex} key={rex.id} />
                        ))}
                    </div>
                    <div>
                        {resinstance.mealList?.map((meal) => (
                            <MealCard meal={meal} key={meal.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResInstanceDetail;