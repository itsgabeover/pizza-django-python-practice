import React, { useState } from 'react'
import axios from 'axios'

function PizzaUpdate({ pizzeria }) {
    //Code
    console.log(pizzeria)
    const [updateFormValues, setUpdateFormValues] = useState({
        'pizzeria_name': pizzeria.pizzeria_name,
        'street': pizzeria.street,
        'city': pizzeria.city,
        'state': pizzeria.state,
        'zip_code': pizzeria.zip_code,
        'website': pizzeria.website,
        'phone_number': pizzeria.phone_number,
        'description': pizzeria.description,
        'email': pizzeria.email,
    })

    function handleSubmit(e){
        e.preventDefault()
        console.log(updateFormValues);
        axios
        .patch("http://127.0.0.1:8000/update".concat(pizzeria.update), updateFormValues)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

    }

    const handleChange = (e) => {
        console.log(updateFormValues)
        setUpdateFormValues({...updateFormValues, [e.target.name]: e.target.value})
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
      } = updateFormValues;
    return (
        <div style={{ color: "red", border: "1px solid red" }}>
            <form onSubmit={handleSubmit}>
                <h6>Updating</h6>
                <div>
                Pizzeria
                <input
                    type="text"
                    name="pizzeria_name"
                    defaultValue={pizzeria_name}
                    onChange={handleChange}
                />
                </div>
                <div>
                Address
                <input
                    type="text"
                    name="street"
                    defaultValue={street}
                    onChange={handleChange}
                />
                </div>
                <div>
                City
                <input
                    type="text"
                    name="city"
                    defaultValue={city}
                    onChange={handleChange}
                />
                </div>
                <div>
                State
                <input
                    type="text"
                    name="state"
                    defaultValue={state}
                    onChange={handleChange}
                />
                </div>
                
                <div>
                Zip
                <input
                    type="text"
                    name="zip_code"
                    defaultValue={zip_code}
                    onChange={handleChange}
                />
                </div>
                <div>
                Website
                <input
                    type="text"
                    name="website"
                    defaultValue={website}
                    onChange={handleChange}
                />
                </div>
                <div>
                Phone
                <input
                    type="text"
                    name="phone_number"
                    defaultValue={phone_number}
                    onChange={handleChange}
                />
                </div>
                <div>
                Description
                <input
                    type="text"
                    name="description"
                    defaultValue={description}
                    onChange={handleChange}
                />
                </div>
                <div>
                Email
                <input
                    type="text"
                    name="email"
                    defaultValue={email}
                    onChange={handleChange}
                />
                </div>
                <input style={{backgroundColor:'white'}} type="submit" value="Submit" />
            </form>
        </div>
    )

}
export default PizzaUpdate;