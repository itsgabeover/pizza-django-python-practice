import React, { useState } from 'react'
import axios from 'axios'

function PizzaForm() {
    //Code
    const [formValues, setFormValues] = useState({
        'pizzeria_name': "",
        'street': "",
        'city': "",
        'state': "",
        'zip_code': "",
        'website': "",
        'phone_number': "",
        'description': "",
        'email': "",
    })

    function handleSubmit(e){
        e.preventDefault()
        console.log(formValues);
        axios
        .post("http://127.0.0.1:8000/create/", {
          pizzeria_name: formValues.pizzeria_name,
          street: formValues.street,
          city: formValues.city,
          state: formValues.state,
          zip_code: formValues.zip_code,
          website: formValues.website,
          phone_number: formValues.phone_number,
          description: formValues.description,
          email: formValues.email,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

    }

    const handleChange = (e) => {
        console.log(formValues)
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    const {
        pizzeria_name,
        street,
        city,
        state,
        zip_code,
        website,
        phone_number,
        description,
        email,
      } = formValues;
    return (
        <form onSubmit={handleSubmit}>
            <div>
            Pizzeria
            <input
                type="text"
                name="pizzeria_name"
                //value={pizzeria_name}
                onChange={handleChange}
            />
            </div>
            <div>
            Address
            <input
                type="text"
                name="street"
                //value={street}
                onChange={handleChange}
            />
            </div>
            <div>
            City
            <input
                type="text"
                name="city"
                //value={city}
                onChange={handleChange}
            />
            </div>
            <div>
            State
            <input
                type="text"
                name="state"
                //value={state}
                onChange={handleChange}
            />
            </div>
            
            <div>
            Zip
            <input
                type="text"
                name="zip_code"
                //value={zip_code}
                onChange={handleChange}
            />
            </div>
            <div>
            Website
            <input
                type="text"
                name="website"
                //value={website}
                onChange={handleChange}
            />
            </div>
            <div>
            Phone
            <input
                type="text"
                name="phone_number"
                //value={phone_number}
                onChange={handleChange}
            />
            </div>
            <div>
            Description
            <input
                type="text"
                name="description"
                //value={description}
                onChange={handleChange}
            />
            </div>
            <div>
            Email
            <input
                type="text"
                name="email"
                //value={email}
                onChange={handleChange}
            />
            </div>
            <input style={{backgroundColor:'white'}} type="submit" value="Submit" />
        </form>
    )

}
export default PizzaForm;