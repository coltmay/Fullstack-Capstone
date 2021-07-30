import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addResInstance } from "../../modules/resinstanceManager";

const ResInstanceForm = () => {
    const emptyResInstance = {
        date: Date.now(),
        BeforeMood: '',
        AfterMood: '',
        UserWeight: '',
        Journal: ''
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
            history.push("/");
        });
    };

    return (
        <h1>ResInstance Form</h1>
        // <Form>
        //     <FormGroup>
        //         <Label for="journal">Journal</Label>
        //         <Input type="textarea" name="journal" id="journal"
        //             value={resInstance.journal}
        //             onChange={handleInputChange} />
        //     </FormGroup>
        //     <Button className="btn btn-primary" onClick={handleSave}>Save</Button>
        // </Form>
    );
};

export default ResInstanceForm;
