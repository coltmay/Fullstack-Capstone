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
        // <Form>
        //     <FormGroup>
        //         <Input hidden name="id" id="id"
        //             value={resInstance?.id}
        //             onChange={handleInputChange} />
        //     </FormGroup>
        //     <FormGroup className="resEditMoodBeforeBin">
        //         <Label className="resEditMoodBeforeLabel" for="beforeMood">Mood Before</Label>
        //         <Input className="resEditMoodBeforeInput" type="select" name="beforeMood" id="beforeMood"
        //             value={resInstance?.beforeMood}
        //             onChange={handleInputChange}>
        //             <option>&#128512;</option> {/* Normal Smile */}
        //             <option>&#128513;</option> {/* Cheese */}
        //             <option>&#128514;</option> {/* LaughCry */}
        //             <option>&#128515;</option> {/* Smile Again */}
        //             <option>&#128516;</option> {/* EyesClosedSmile */}
        //             <option>&#128517;</option> {/* SmileSweat */}
        //             <option>&#128518;</option> {/* XD */}
        //             <option>&#128527;</option> {/* Smug */}
        //             <option>&#128528;</option> {/* Fine */}
        //             <option>&#128529;</option> {/* Hm... */}
        //             <option>&#128530;</option> {/* SmugSad */}
        //             <option>&#128531;</option> {/* Sad Sweat */}
        //             <option>&#128532;</option> {/* Sad Sad */}
        //             <option>&#128533;</option> {/* Blah Sad */}
        //             <option>&#128534;</option> {/* Bitter Sad */}
        //             <option>&#128544;</option> {/* Angry */}
        //             <option>&#128552;</option> {/* Shocked */}
        //             <option>&#128553;</option> {/* Whiney */}
        //             <option>&#128557;</option> {/* TearFlood */}
        //             <option>&#128116;</option> {/* Old Man */}
        //             <option>&#128117;</option> {/* Old Woman */}
        //             <option>&#128118;</option> {/* Baby */}
        //             <option>&#128128;</option> {/* Skull */}
        //             <option>&#128148;</option> {/* Heartbreak */}
        //             <option>&#128163;</option> {/* Bomb */}
        //             <option>&#128169;</option> {/* Poo */}
        //             <option>&#128170;</option> {/* StrongArm */}
        //             <option>&#128175;</option> {/* 100 */}
        //         </Input>
        //     </FormGroup>
        //     <FormGroup className="resEditMoodAfterBin">
        //         <Label className="resEditMoodAfterLabel" for="afterMood">Mood After</Label>
        //         <Input className="resEditMoodAfterInput" type="select" name="afterMood" id="afterMood"
        //             value={resInstance?.afterMood}
        //             onChange={handleInputChange}>
        //             <option>&#128512;</option> {/* Normal Smile */}
        //             <option>&#128513;</option> {/* Cheese */}
        //             <option>&#128514;</option> {/* LaughCry */}
        //             <option>&#128515;</option> {/* Smile Again */}
        //             <option>&#128516;</option> {/* EyesClosedSmile */}
        //             <option>&#128517;</option> {/* SmileSweat */}
        //             <option>&#128518;</option> {/* XD */}
        //             <option>&#128527;</option> {/* Smug */}
        //             <option>&#128528;</option> {/* Fine */}
        //             <option>&#128529;</option> {/* Hm... */}
        //             <option>&#128530;</option> {/* SmugSad */}
        //             <option>&#128531;</option> {/* Sad Sweat */}
        //             <option>&#128532;</option> {/* Sad Sad */}
        //             <option>&#128533;</option> {/* Blah Sad */}
        //             <option>&#128534;</option> {/* Bitter Sad */}
        //             <option>&#128544;</option> {/* Angry */}
        //             <option>&#128552;</option> {/* Shocked */}
        //             <option>&#128553;</option> {/* Whiney */}
        //             <option>&#128557;</option> {/* TearFlood */}
        //             <option>&#128116;</option> {/* Old Man */}
        //             <option>&#128117;</option> {/* Old Woman */}
        //             <option>&#128118;</option> {/* Baby */}
        //             <option>&#128128;</option> {/* Skull */}
        //             <option>&#128148;</option> {/* Heartbreak */}
        //             <option>&#128163;</option> {/* Bomb */}
        //             <option>&#128169;</option> {/* Poo */}
        //             <option>&#128170;</option> {/* StrongArm */}
        //             <option>&#128175;</option> {/* 100 */}
        //         </Input>
        //     </FormGroup>
        //     <FormGroup className="resEditWeightBin">
        //         <Label className="resEditWeightLabel" for="userWeight">Weight</Label>
        //         <Input className="resEditWeightInput" type="int" name="userWeight" id="userWeight"
        //             value={resInstance?.userWeight}
        //             onChange={handleInputChange} />
        //     </FormGroup>
        //     <FormGroup className="resEditJournalBin">
        //         <Label className="resEditJournalLabel" for="journal">Journal</Label>
        //         <Input className="resEditJournalInput" type="textarea" name="journal" id="journal"
        //             value={resInstance?.journal}
        //             onChange={handleInputChange} />
        //     </FormGroup>
        //     <Button className="resEditSave" onClick={handleSave}>Save</Button>
        //     <Button className="resEditCancel" onClick={() => history.push(`/resinstances/detail/${id}`)}>Cancel</Button>
        // </Form >
        <div className="raddfieldform">
            <Form>
                <div className="raddSuperForm">
                    <FormGroup className="raddFormA">
                        <Label className="raddBeforeLabel" for="beforeMood">Mood Before</Label>
                        <div className="inputHolder">
                            <Input type="select" className="raddBeforeMood" name="raddBeforeMood" id="beforeMood"
                                value={resInstance?.beforeMood}
                                onChange={handleInputChange}>
                                <option>&#128512;</option> {/* Normal Smile */}
                                <option>&#128513;</option> {/* Cheese */}
                                <option>&#128514;</option> {/* LaughCry */}
                                <option>&#128515;</option> {/* Smile Again */}
                                <option>&#128516;</option> {/* EyesClosedSmile */}
                                <option>&#128517;</option> {/* SmileSweat */}
                                <option>&#128518;</option> {/* XD */}
                                <option>&#128527;</option> {/* Smug */}
                                <option>&#128528;</option> {/* Fine */}
                                <option>&#128529;</option> {/* Hm... */}
                                <option>&#128530;</option> {/* SmugSad */}
                                <option>&#128531;</option> {/* Sad Sweat */}
                                <option>&#128532;</option> {/* Sad Sad */}
                                <option>&#128533;</option> {/* Blah Sad */}
                                <option>&#128534;</option> {/* Bitter Sad */}
                                <option>&#128544;</option> {/* Angry */}
                                <option>&#128552;</option> {/* Shocked */}
                                <option>&#128553;</option> {/* Whiney */}
                                <option>&#128557;</option> {/* TearFlood */}
                                <option>&#128116;</option> {/* Old Man */}
                                <option>&#128117;</option> {/* Old Woman */}
                                <option>&#128118;</option> {/* Baby */}
                                <option>&#128128;</option> {/* Skull */}
                                <option>&#128148;</option> {/* Heartbreak */}
                                <option>&#128163;</option> {/* Bomb */}
                                <option>&#128169;</option> {/* Poo */}
                                <option>&#128170;</option> {/* StrongArm */}
                                <option>&#128175;</option> {/* 100 */}
                            </Input>
                        </div>
                    </FormGroup>
                    <FormGroup className="raddFormB">
                        <Label className="raddAfterLabel" for="afterMood">Mood After</Label>
                        <Input className="raddAfterMood" type="select" name="afterMood" id="afterMood"
                            value={resInstance?.afterMood}
                            onChange={handleInputChange}>
                            <option>&#128512;</option> {/* Normal Smile */}
                            <option>&#128513;</option> {/* Cheese */}
                            <option>&#128514;</option> {/* LaughCry */}
                            <option>&#128515;</option> {/* Smile Again */}
                            <option>&#128516;</option> {/* EyesClosedSmile */}
                            <option>&#128517;</option> {/* SmileSweat */}
                            <option>&#128518;</option> {/* XD */}
                            <option>&#128527;</option> {/* Smug */}
                            <option>&#128528;</option> {/* Fine */}
                            <option>&#128529;</option> {/* Hm... */}
                            <option>&#128530;</option> {/* SmugSad */}
                            <option>&#128531;</option> {/* Sad Sweat */}
                            <option>&#128532;</option> {/* Sad Sad */}
                            <option>&#128533;</option> {/* Blah Sad */}
                            <option>&#128534;</option> {/* Bitter Sad */}
                            <option>&#128544;</option> {/* Angry */}
                            <option>&#128552;</option> {/* Shocked */}
                            <option>&#128553;</option> {/* Whiney */}
                            <option>&#128557;</option> {/* TearFlood */}
                            <option>&#128116;</option> {/* Old Man */}
                            <option>&#128117;</option> {/* Old Woman */}
                            <option>&#128118;</option> {/* Baby */}
                            <option>&#128128;</option> {/* Skull */}
                            <option>&#128148;</option> {/* Heartbreak */}
                            <option>&#128163;</option> {/* Bomb */}
                            <option>&#128169;</option> {/* Poo */}
                            <option>&#128170;</option> {/* StrongArm */}
                            <option>&#128175;</option> {/* 100 */}
                        </Input>
                    </FormGroup>
                </div>
                <div className="raddMegaForm">
                    <FormGroup className="raddFormC">
                        <Label className="raddWeightLabel" for="userWeight">Weight</Label>
                        <Input className="raddWeight" type="int" name="userWeight" id="userWeight"
                            value={resInstance?.userWeight}
                            onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup className="raddFormD">
                        <Label className="raddJournalLabel" for="journal">Journal</Label>
                        <Input className="raddJournal" type="textarea" name="journal" id="journal"
                            value={resInstance?.journal}
                            onChange={handleInputChange} />
                    </FormGroup>
                    <div className="raddButtonBox">
                        <Button className="raddCancelButton" onClick={() => history.push(`/resinstances/detail/${id}`)}>Cancel</Button>
                        <Button className="raddSaveButton" onClick={handleSave}>Save</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default ResInstanceForm;
