import React, { useEffect, useState } from "react";
import { getResInstancesById } from "../../modules/resinstanceManager";
import { useParams } from "react-router-dom";

const ResInstanceDetail = () => {
    const [resinstance, setResinstance] = useState([]);
    const { resinstanceId } = useParams();

    const getResinstance = (id) => {
        getResInstancesById(resinstanceId).then(resinstances => setResinstance(resinstance));
    };

    useEffect(() => {
        getResinstance();
    }, []);

    return (
        <>
            Nothing here yet.
        </>
    );
};

export default ResInstanceDetail;