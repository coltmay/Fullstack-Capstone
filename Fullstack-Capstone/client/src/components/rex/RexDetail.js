import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { getRexById } from "../../modules/rexManager";
import "./RexDetail.css";

const RexDetail = () => {
    const [rex, setRex] = useState([]);
    const history = useHistory();
    const { resinstanceid, rexid } = useParams();

    const getRex = () => {
        getRexById(rexid).then(rex => setRex(rex));
    };

    useEffect(() => {
        getRex();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    <h1 className="rexDetHeader">{rex.exercise?.name}</h1>
                    <div className="rexDetSetRep">
                        <p className="rexDetSets">Recommended Sets • {rex.exercise?.sets}</p>
                        <p className="rexDetReps">Recommended Reps • {rex.exercise?.reps}</p>
                    </div>
                    <p className="rexDetDesc">{rex.exercise?.description}</p>
                    <div className="rexDetWeightDiff">
                        <p className="rexDetWeight">Weight Lifted (lbs) • {rex.weight}</p>
                        <p className="rexDetDiff">Difficulty • {rex.difficulty}</p>
                    </div>
                    <div className="rexDetButtonBin">
                        <Button className="rexDetBackButton" onClick={() => history.push(`/resinstances/detail/${resinstanceid}`)}>Back</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RexDetail;