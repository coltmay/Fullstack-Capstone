import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getResInstancesById } from "../../modules/resinstanceManager";
import { RexCard } from "../rex/RexCard";
import { MealCard } from "../meal/MealsCard";

const ResInstanceDetail = () => {
    const [resinstance, setResinstance] = useState([]);
    const { id } = useParams();

    const getResinstance = () => {
        getResInstancesById(id).then(resinstance => setResinstance(resinstance));
    };

    useEffect(() => {
        getResinstance();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    <h1>{resinstance.date}</h1>
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