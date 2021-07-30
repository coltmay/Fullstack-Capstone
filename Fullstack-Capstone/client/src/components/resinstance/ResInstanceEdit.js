import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getResInstanceById, updateResInstance } from "../../modules/resinstanceManager";

const ResInstanceForm = () => {
    const [resInstance, setResInstance] = useState();
    const history = useHistory();
    const { id } = useParams();

    const getResInstanceToEdit = () => {
        getResInstanceById(id).then(resInstance => setResInstance(resInstance))
    }

    useEffect(() => {
        getResInstanceToEdit();
    }, []);

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;
        const resInstanceCopy = { ...resInstance };

        resInstanceCopy[key] = value;
        setResInstance(resInstanceCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();
        updateResInstance(resInstance).then((p) => {
            // Navigate the user back to the home route
            history.push(`/resinstances/detail/${resInstance.id}`);
        });
    };

    return (
        <Form>
            <h1>ResInstance Form</h1>
            <FormGroup>
                <Input hidden name="id" id="id"
                    value={resInstance?.id}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="date">Date</Label>
                <Input type="date" name="date" id="date"
                    value={resInstance?.date}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="beforeMood">Mood Before</Label>
                <Input type="text" name="beforeMood" id="beforeMood"
                    value={resInstance?.beforeMood}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="afterMood">Mood After</Label>
                <Input type="text" name="afterMood" id="afterMood"
                    value={resInstance?.afterMood}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="userWeight">Weight</Label>
                <Input type="int" name="userWeight" id="userWeight"
                    value={resInstance?.userWeight}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="journal">Journal</Label>
                <Input type="textarea" name="journal" id="journal"
                    value={resInstance?.journal}
                    onChange={handleInputChange} />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleSave}>Save</Button>
        </Form>
    );
};

export default ResInstanceForm;
