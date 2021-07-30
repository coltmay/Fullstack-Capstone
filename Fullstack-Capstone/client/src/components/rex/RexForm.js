import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addRex } from "../../modules/rexManager";

const RexForm = () => {
    const emptyRex = {
        resInstanceId: '',
        ExerciseId: '',
        Weight: '',
        Difficulty: ''
    };

    const [rex, setRex] = useState(emptyRex);
    const history = useHistory();


    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const rexCopy = { ...rex };

        rexCopy[key] = value;
        setRex(rexCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();
        addRex(rex).then((p) => {
            // Navigate the user back to the home route
            history.push("/");
        });
    };

    return (
        <h1>Rex Form</h1>
        // <Form>
        //     <FormGroup>
        //         <Label for="journal">Journal</Label>
        //         <Input type="textarea" name="journal" id="journal"
        //             value={rex.journal}
        //             onChange={handleInputChange} />
        //     </FormGroup>
        //     <Button className="btn btn-primary" onClick={handleSave}>Save</Button>
        // </Form>
    );
};

export default RexForm;
