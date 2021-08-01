import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getRexById, updateRex } from '../../modules/rexManager';

const RexEdit = () => {
    const [rex, setRex] = useState();
    const history = useHistory();

    // FEED ANOTHER PARAM INTO THIS
    const { resinstanceid, rexid } = useParams();
    console.log(resinstanceid, rexid)
    const getRexToEdit = () => {
        getRexById(rexid).then(rex => setRex(rex))
    }

    useEffect(() => {
        getRexToEdit();
    }, []);

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;
        const rexCopy = { ...rex };
        rexCopy[key] = value;
        setRex(rexCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();

        const editedRex = {
            id: rex.id,
            weight: rex.weight,
            difficulty: rex.difficulty
        }

        updateRex(editedRex).then((p) => {

            // THIS WILL CHANGE BY PULLING THE CORRECT PARAM
            history.push(`/resinstances/detail/${resinstanceid}`);
        });
    };

    return (
        <Form>
            <h1>Rex Form</h1>
            <FormGroup>
                <Input hidden name="id" id="id"
                    value={rex?.id}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="weight">Weight</Label>
                <Input type="weight" name="weight" id="weight"
                    value={rex?.weight}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="difficulty">Difficulty</Label>
                <Input type="difficulty" name="difficulty" id="difficulty"
                    value={rex?.difficulty}
                    onChange={handleInputChange} />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleSave}>Save</Button>
        </Form>
    );
};

export default RexEdit;
