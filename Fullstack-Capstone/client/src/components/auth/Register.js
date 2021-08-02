import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { register } from "../../modules/authManager";

export default function Register() {
    const history = useHistory();

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState("")
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [ProfileUrl, setProfileUrl] = useState(1);
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const registerClick = (e) => {
        e.preventDefault();
        if (password && password !== confirmPassword) {
            alert("Passwords don't match. Do better.");
        } else {
            const userProfile = { userName, email, firstName, lastName, ProfileUrl };
            register(userProfile, password)
                .then(() => history.push("/"));
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
        setProfileUrl(file.secure_url);
        setIsLoading(false);
    }



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
                {/* <FormGroup>
                    <Label htmlFor="avatarId">Avatar</Label>
                    <Input id="name" type="int" autoFocus onChange={e => setAvatarId(e.target.value)} />
                </FormGroup> */}
                <FormGroup>
                    <Label for="avatarURL">Profile Picture</Label>
                    <br></br>
                    <Input id="file" type="file" onChange={uploadImage} />
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