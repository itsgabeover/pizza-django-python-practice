import React, { useEffect, useState } from 'react'
import PizzaDetail from './pizzeriaDetail'
import PizzaForm from './pizzaForm'
import axios from 'axios'

function PizzaList() {
    const [ pizzeriasData, setPizzeriasData ] = useState([])
    const [ pizzeria, setPizzeria] = useState({})
    const [ showComponent, setShowComponent ] = useState(false)
    console.log("pizza list page")
    useEffect(()=>{
        axios.get(process.env.REACT_APP_URL)
        .then((response) => {
            setPizzeriasData(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])

    function getPizzeriaDetail(item) {
        axios.get("http://127.0.0.1:8000".concat(item.absolute_url))
        .then((response) => {
            setPizzeria(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    function showPizzeriaDetails(item) {
        getPizzeriaDetail(item)
        setShowComponent(true)
    }

    return (
        <div>
            <PizzaForm />
            {pizzeriasData.map((pizzeria) => {
                return (
                    <h3 key={pizzeria.id} onClick={() => showPizzeriaDetails(pizzeria)}>
                    {pizzeria.pizzeria_name}, {pizzeria.city}
                    </h3>
                );
            })}
            {showComponent ? (
                <PizzaDetail pizzeria={pizzeria} />
            ) : null}
        </div>
    )
    
}
export default PizzaList