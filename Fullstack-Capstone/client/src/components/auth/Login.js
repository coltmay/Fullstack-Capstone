import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";
import { login } from "../../modules/authManager";
import "./Login.css";

export default function Login() {
    const history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginSubmit = (e) => {
        e.preventDefault();
        login(email, password)
            .then(() => history.push("/dashboard"))
            .catch(() => alert("Login Failed"));
    };

    return (
        <Form className="logForm" onSubmit={loginSubmit}>
            <fieldset>
                <FormGroup>
                    <Label className="logEmailLabel" for="email">Email</Label>
                    <Input className="logEmailInput" id="email" type="text" autoFocus onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label className="logPasswordLabel" for="password">Password</Label>
                    <Input className="logPasswordInput" id="password" type="password" onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup className="logButtonBin">
                    <Button className="logButton">Login</Button>
                </FormGroup>
                <div className="logRegisterString">
                    Not registered? <Link to="register">Register</Link>
                </div>
            </fieldset>
        </Form>
    );
}