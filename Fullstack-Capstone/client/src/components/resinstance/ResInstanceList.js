import React, { useEffect, useState } from "react";
import ResInstance from './ResInstance';
import { getResInstancesByUser } from "../../modules/resinstanceManager";
import { useParams } from "react-router-dom";

const ResInstanceList = () => {
    const [resinstances, setResinstances] = useState([]);
    const { userId } = useParams();

    const getResinstances = () => {
        getResInstancesByUser(userId).then(resinstances => setResinstances(resinstances));
    };

    useEffect(() => {
        getResinstances();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    {resinstances.map((resinstance) => (
                        <ResInstance resinstance={resinstance} key={resinstance.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ResInstanceList;