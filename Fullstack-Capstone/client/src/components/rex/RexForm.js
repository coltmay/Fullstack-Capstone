import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addRex } from "../../modules/rexManager";

const RexForm = () => {

    const { id } = useParams();
    console.log(id);
    const emptyRex = {
        resinstanceId: id,
        name: '',
        calories: ''
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
            history.push(`/resinstances/detail/${id}`);
        });
    };

    return (
        <Form>
            <h1>Rex Form</h1>
            <FormGroup>
                <Label for="name">Rex</Label>
                <Input type="text" name="name" id="name"
                    value={rex.name}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="calories">Calories</Label>
                <Input type="text" name="calories" id="calories"
                    value={rex.calories}
                    onChange={handleInputChange} />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleSave}>Save</Button>
        </Form>
    );
};


export default RexForm;
