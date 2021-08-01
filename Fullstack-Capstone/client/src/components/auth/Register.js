import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { register } from "../../modules/authManager";

export default function Register() {
    const history = useHistory();

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [AvatarId, setAvatarId] = useState(1);
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const registerClick = (e) => {
        e.preventDefault();
        if (password && password !== confirmPassword) {
            alert("Passwords don't match. Do better.");
        } else {
            const userProfile = { userName, email, firstName, lastName, AvatarId };
            register(userProfile, password)
                .then(() => history.push("/"));
        }
    };

    return (
        <Form onSubmit={registerClick}>
            <fieldset>
                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="name" type="text" autoFocus onChange={e => setFirstName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="name" type="text" autoFocus onChange={e => setLastName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="userName">Username</Label>
                    <Input id="name" type="text" autoFocus onChange={e => setUserName(e.target.value)} />
                </FormGroup>
                {/* Temporary Avatar Code */}
                <FormGroup>
                    <Label htmlFor="avatarId">Avatar</Label>
                    <Input id="name" type="int" autoFocus onChange={e => setAvatarId(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Button color="primary">Register</Button>
                </FormGroup>
            </fieldset>
        </Form>
    );
}