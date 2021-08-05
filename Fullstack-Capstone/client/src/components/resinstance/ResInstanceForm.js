import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addResInstance } from "../../modules/resinstanceManager";
import "./ResInstanceForm.css"

const ResInstanceForm = () => {
    const emptyResInstance = {
        date: Date.now,
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
            history.push(`/resinstances/detail/${p}`);
        });
    };

    console.log(resInstance)

    return (
        <div className="raddfieldform">
            <Form>
                <div className="raddSuperForm">
                    <FormGroup className="raddFormA">
                        <Label className="raddBeforeLabel" for="beforeMood">Mood Before</Label>
                        <div className="inputHolder">
                            <Input type="select" className="raddBeforeMood" name="raddBeforeMood" id="beforeMood"
                                value={resInstance.beforeMood}
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
                            value={resInstance.afterMood}
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
                        <Label className="raddWeightLabel" for="userWeight">My Weight</Label>
                        <Input className="raddWeight" type="int" name="userWeight" id="userWeight"
                            value={resInstance.userWeight}
                            onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup className="raddFormD">
                        <Label className="raddJournalLabel" for="journal">Journal</Label>
                        <Input className="raddJournal" type="textarea" name="journal" id="journal"
                            value={resInstance.journal}
                            onChange={handleInputChange} />
                    </FormGroup>
                    <div className="raddButtonBox">
                        <Button className="raddCancelButton" onClick={() => history.push(`/myresinstances`)}>Cancel</Button>
                        <Button className="raddSaveButton" onClick={handleSave}>Save</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default ResInstanceForm;
