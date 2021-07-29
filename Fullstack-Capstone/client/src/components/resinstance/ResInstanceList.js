import React, { useEffect, useState } from "react";
import ResInstanceCard from './ResInstanceCard';
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
                        <ResInstanceCard resinstance={resinstance} key={resinstance.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ResInstanceList;