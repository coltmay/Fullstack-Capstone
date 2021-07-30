import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ResInstanceCard from './ResInstanceCard';
import { getResInstancesByUser } from "../../modules/resinstanceManager";


const ResInstanceList = () => {
    const [resinstances, setResinstances] = useState([]);

    const getResinstances = () => {
        getResInstancesByUser().then(resinstances => setResinstances(resinstances));
    };

    useEffect(() => {
        getResinstances();
    }, []);

    return (
        <>
            <h1>ResInstance List</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <Link to="resinstances/form">Add</Link>
                    {resinstances.map((resinstance) => (
                        <ResInstanceCard resinstance={resinstance} key={resinstance.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ResInstanceList;