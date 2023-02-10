import './App.css';
import PizzaList from "./pizzerias/pizzeriaList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
         className="App-logo" alt="logo" />
        <p>
          Web app for pizza lovers
        </p>
        
        <h1>
          Pizza vs Pizza
        </h1>
        <PizzaList/>
        
      </header>
    </div>
  );
}

export default App;
