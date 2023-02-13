import React, { useState } from 'react'
import PizzaUpdate from './pizzaUpdate'
import axios from 'axios'

function PizzaDetail( { pizzeria } ) {
    const [ showComponent, setShowComponent ] = useState(false)
    console.log(pizzeria)
    function updatePizzeriaDetails() {
        setShowComponent(true)
    }

    function deletePizzeria(pizzeria){

        axios.delete("http://127.0.0.1:8000/delete".concat(pizzeria.delete))
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
      }
    return (
        <div style={{ color: "yellow", border: "1px solid yellow" }}>
            <h4>{pizzeria.name}</h4>
            <h5>
                Address: {pizzeria.street} {pizzeria.city} {pizzeria.state} {pizzeria.zip_code}
            </h5>
            <h6>
                Phone: {pizzeria.phone_number}
            </h6>
            <p>
                {pizzeria.description}
            </p>
            <button
                style={{ backgroundColor: "white" }}
                onClick={() => updatePizzeriaDetails()}>
                Update
            </button>
            <button
                style={{ backgroundColor: "white" }}
                onClick={() => deletePizzeria(pizzeria)}>
            Delete
                </button>
            {showComponent ? (
                <PizzaUpdate pizzeria={pizzeria}/>
            ) : null}

        </div>
    )
}
export default PizzaDetail