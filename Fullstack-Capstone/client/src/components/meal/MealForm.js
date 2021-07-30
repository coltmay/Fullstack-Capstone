import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addMeal } from "../../modules/mealManager";

const MealForm = () => {

    const { id } = useParams();

    const emptyMeal = {
        resinstanceId: id,
        name: '',
        calories: ''
    };
    const [meal, setMeal] = useState(emptyMeal);
    const history = useHistory();

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const mealCopy = { ...meal };

        mealCopy[key] = value;
        setMeal(mealCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();
        addMeal(meal).then((p) => {
            // Navigate the user back to the home route
            history.push(`/resinstances/detail/${id}`);
        });
    };

    return (
        <Form>
            <h1>Meal Form</h1>
            <FormGroup>
                <Label for="name">Meal</Label>
                <Input type="text" name="name" id="name"
                    value={meal.name}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="calories">Calories</Label>
                <Input type="text" name="calories" id="calories"
                    value={meal.calories}
                    onChange={handleInputChange} />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleSave}>Save</Button>
        </Form>
    );
};


export default MealForm;
