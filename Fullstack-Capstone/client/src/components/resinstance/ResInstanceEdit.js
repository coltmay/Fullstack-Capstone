import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getResInstanceById, updateResInstance } from "../../modules/resinstanceManager";
import "./ResInstanceEdit.css"

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

        // Unneeded
        const editedResInstance = {
            id: resInstance.id,
            date: resInstance.date,
            beforeMood: resInstance.beforeMood,
            afterMood: resInstance.afterMood,
            userWeight: resInstance.userWeight,
            journal: resInstance.journal
        }

        updateResInstance(editedResInstance).then((p) => {
            // Navigate the user back to the home route
            history.push(`/resinstances/detail/${resInstance?.id}`);
        });
    };

    return (
        <Form>
            <FormGroup>
                <Input hidden name="id" id="id"
                    value={resInstance?.id}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup className="resEditMoodBeforeBin">
                <Label className="resEditMoodBeforeLabel" for="beforeMood">Mood Before</Label>
                <Input className="resEditMoodBeforeInput" type="text" name="beforeMood" id="beforeMood"
                    value={resInstance?.beforeMood}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup className="resEditMoodAfterBin">
                <Label className="resEditMoodAfterLabel" for="afterMood">Mood After</Label>
                <Input className="resEditMoodAfterInput" type="text" name="afterMood" id="afterMood"
                    value={resInstance?.afterMood}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup className="resEditWeightBin">
                <Label className="resEditWeightLabel" for="userWeight">Weight</Label>
                <Input className="resEditWeightInput" type="int" name="userWeight" id="userWeight"
                    value={resInstance?.userWeight}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup className="resEditJournalBin">
                <Label className="resEditJournalLabel" for="journal">Journal</Label>
                <Input className="resEditJournalInput" type="textarea" name="journal" id="journal"
                    value={resInstance?.journal}
                    onChange={handleInputChange} />
            </FormGroup>
            <Button className="resEditSave" onClick={handleSave}>Save</Button>
            <Button className="resEditCancel" onClick={() => history.push(`/resinstances/detail/${id}`)}>Cancel</Button>
        </Form >
    );
};

export default ResInstanceForm;
