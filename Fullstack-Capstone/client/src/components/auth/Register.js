import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { register } from "../../modules/authManager";
import "./Register.css";

export default function Register() {
    const history = useHistory();

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState("")
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [AvatarUrl, setAvatarUrl] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const registerClick = (e) => {
        e.preventDefault();
        if (password && password !== confirmPassword) {
            alert("Passwords don't match. Do better.");
        } else {
            const userProfile = { userName, email, firstName, lastName, AvatarUrl };
            register(userProfile, password)
                .then(() => history.push("/dashboard"));
        }
    };

    const uploadImage = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'resinstance');
        setIsLoading(true);

        const res = await fetch("https://api.cloudinary.com/v1_1/dezokheym/image/upload",
            {
                method: 'POST',
                body: data
            })

        const file = await res.json()

        console.log(file);

        setImage(file.secure_url);
        setAvatarUrl(file.secure_url);
        setIsLoading(false);
    }



    return (
        <Form className="regForm" onSubmit={registerClick}>
            <fieldset>
                <div className="regNameBin">
                    <FormGroup className="regFirstNameBin">
                        <Label className="regFirstLabel" htmlFor="firstName">First Name</Label>
                        <Input className="regFirstInput" id="name" type="text" autoFocus onChange={e => setFirstName(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="regLastNameBin">
                        <Label className="regLastLabel" htmlFor="lastName">Last Name</Label>
                        <Input className="regLastInput" id="name" type="text" autoFocus onChange={e => setLastName(e.target.value)} />
                    </FormGroup>
                </div>
                <FormGroup>
                    <Label className="regUserLabel" htmlFor="userName">Username</Label>
                    <Input className="regUserInput" id="name" type="text" autoFocus onChange={e => setUserName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label className="regProPicLabel" for="avatarURL">Profile Picture</Label>
                    <br></br>
                    <Input className="regProPicInput" id="file" type="file" onChange={uploadImage} />
                </FormGroup>
                <FormGroup>
                    <Label className="regEmailLabel" for="email">Email</Label>
                    <Input className="regEmailInput" id="email" type="text" onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label className="regPasswordLabel" for="password">Password</Label>
                    <Input className="regPasswordInput" id="password" type="password" onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label className="regConfirmPasswordLabel" for="confirmPassword">Confirm Password</Label>
                    <Input className="regConfirmPasswordInput" id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
                </FormGroup>
                <FormGroup className="regButtonBin">
                    <Button className="regButton">Register</Button>
                </FormGroup>
            </fieldset>
        </Form>
    );
}