import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//  from "../service/recipeSearch"

import searchRecipeAPI from "./service/recipeSearch"


function App() {

  const [ingredients, setIngredients] = useState<string>("");

  const handleSubmitButton = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIngredients(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the textareaValue, e.g., send it to the server
    console.log("data",searchRecipeAPI.fetchData())
    console.log('Textarea value:', ingredients);
  };

  return (
    <div className="App">
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid text-center">
          <a className="navbar-brand " href="#">Recipe Search</a>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Pricing</a>
              <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
            </div>
          </div> */}
        </div>
      </nav>

      <div className= 'pt-4 row justify-content-center'>
        <div className= 'col-sm-7'>
          <form className="d-flex" onSubmit={handleFormSubmit}>
            <textarea 
              className="form-control me-2" 
              rows={1}
              placeholder="Enter ingredients" 
              aria-label="Search"
              value={ingredients}
              onChange={handleSubmitButton}
            />
            
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

        </div>

      </div>
      
    </div>
  );
}

export default App;
