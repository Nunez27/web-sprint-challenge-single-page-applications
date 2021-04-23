import axios from "axios";
import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';


const pizzaformat = {
  name: '',
  size: '',
  topping1: true,
  topping2: true,
  special: ''
}

const pizza = []

const App = (props) => {

  const [initialPizzaForm, setInitialPizzaForm] = useState(pizzaformat);
  const [order, setOrder] = useState(pizza);

  const postNewOrder = newOrder =>{
    axios
    .post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      setOrder([res.data, ...order]);
      setInitialPizzaForm(pizzaformat);
    })
    .catch((err) =>{
      return(err)
    })
  };

  return (
    <div className='App'>
      <nav>
        <h1>Lambda Eats</h1>
        <div className='.App-header .App-link'>
            <Link to='/'>Home</Link>
            <Link to='/Help'>Help</Link>
        </div>
      </nav>
    </div>
  );
};
export default App;
