import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addResInstance } from "../../modules/resinstanceManager";

const ResInstanceForm = () => {
    const emptyResInstance = {
        date: '',
        beforeMood: '',
        afterMood: '',
        userWeight: '',
        journal: ''
    };

    const [resInstance, setResInstance] = useState(emptyResInstance);
    const history = useHistory();

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const resInstanceCopy = { ...resInstance };

        resInstanceCopy[key] = value;
        setResInstance(resInstanceCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();
        addResInstance(resInstance).then((p) => {
            // Navigate the user back to the home route
            history.push(`/myresinstances`);
        });
    };

    return (
        <Form>
            <h1>ResInstance Form</h1>
            <FormGroup>
                <Label for="date">Date</Label>
                <Input type="date" name="date" id="date"
                    value={resInstance.date}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="beforeMood">Mood Before</Label>
                <Input type="text" name="beforeMood" id="beforeMood"
                    value={resInstance.beforeMood}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="afterMood">Mood After</Label>
                <Input type="text" name="afterMood" id="afterMood"
                    value={resInstance.afterMood}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="userWeight">Weight</Label>
                <Input type="int" name="userWeight" id="userWeight"
                    value={resInstance.userWeight}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="journal">Journal</Label>
                <Input type="textarea" name="journal" id="journal"
                    value={resInstance.journal}
                    onChange={handleInputChange} />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleSave}>Save</Button>
        </Form>
    );
};

export default ResInstanceForm;
