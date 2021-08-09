import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addMeal } from "../../modules/mealManager";
import "./MealForm.css"

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
        <Form className="mealFormBin">
            <div className="mealFormMain">
                <FormGroup className="mealFormNameBin">
                    <Label className="mealFormNameLabel" for="name">Meal</Label>
                    <Input className="mealFormNameInput" type="text" name="name" id="name"
                        value={meal.name}
                        onChange={handleInputChange} />
                </FormGroup>
                <FormGroup className="mealFormCalorieBin">
                    <Label className="mealFormCalorieLabel" for="calories">Calories</Label>
                    <Input className="mealFormCalorieInput" type="text" name="calories" id="calories"
                        value={meal.calories}
                        onChange={handleInputChange} />
                </FormGroup>
            </div>
            <div className="mealFormButtonBin">
                <Button className="mealFormCancel" onClick={() => history.push(`/resinstances/detail/${id}`)}>Cancel</Button>
                <Button className="mealFormSave" onClick={handleSave}>Save</Button>
            </div>
        </Form>
    );
};


export default MealForm;
