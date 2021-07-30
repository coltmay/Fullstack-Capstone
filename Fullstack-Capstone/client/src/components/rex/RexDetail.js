import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRexById } from "../../modules/rexManager";

const RexDetail = () => {
    const [rex, setRex] = useState([]);
    const { id } = useParams();

    const getRex = () => {
        getRexById(id).then(rex => setRex(rex));
    };

    useEffect(() => {
        getRex();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    <h1>{rex.name}</h1>
                    <h2>{rex.exercise?.name}</h2>
                    <p>{rex.exercise?.description}</p>
                    <p>Sets: {rex.exercise?.sets}</p>
                    <p>Reps: {rex.exercise?.reps}</p>
                    <p>Weight: {rex.weight}</p>
                    <p>Difficulty: {rex.difficulty}</p>
                </div>
            </div>
        </div>
    );
};

export default RexDetail;