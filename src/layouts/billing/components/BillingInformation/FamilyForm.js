import React, {
    useState
} from "react";
import Card from "@mui/material/Card";
import {useNavigate} from "react-router-dom";


function Form() {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        contact: "",
        email: "",
        address: ""
    });
    let naam;
    let value;

    function handleInputs(e) {
   console.log(e.target);
        naam = e.target.name;
        value = e.target.value;
        setUser({
            ...user,
            [naam]: value
        });

    }

    const postDetails = async (e) => {
       
        const {
            name,
            contact,
            email,
            address
        } = user;
        // cors error so setting proxy in package.json in frontend to localhost 5000
        const p = await fetch('/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                name,
                contact,
                email,
                address
            })
           
    
        });
         const json=await p.json();
            // console.log(json);
            window.alert("Family Member Added Successfully")
            navigate.push('/form')
    
       
    }



    return ( 
        <Card style = {{ "padding": "30px"}} >
        
        <h1 className = "formheading" > New Family Member </h1> 
        <div className = "form" >
        
        <form >
        
        <p className = "inputlabel" > Name </p> 
        <input name = "name"
        className = "name"
        type = "text"
        required = "true"
        value = {
            user.name
        }
        onChange = {
            handleInputs
        }
        /> 
        <p className = "inputlabel" > Contact </p> 
        <input name = "contact"
        className = "contact"
        type = "text"
        required = "true"
        value = {
            user.contact
        }
        onChange = {
            handleInputs
        }
        /> 
        <p className = "inputlabel" > Email </p> 
        <input name = "email"
        className = "email"
        type = "text"
        required = "true"
        value = {
            user.email
        }
        onChange = {
            handleInputs
        }
        /> 
        <p className = "inputlabel" > Address </p> 
        <textarea name = "address"
        className = "address"
        cols = ""
        rows = ""
        required = "true"
        value = {
            user.address
        }
        onChange = {
            handleInputs
        }
        /> 
        <button onClick = {
            postDetails
        }
        className = "btn"
        type = "submit" > Submit </button> 
        </form> 
        </div> 
        </Card>
    );
}

export default Form;