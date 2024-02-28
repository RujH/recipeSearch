import React, { useState }  from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import searchRecipeAPI from "../service/recipeSearchAPI"



const Home = () =>  {

  const [ingredients, setIngredients] = useState<string>("");

  


  const handleSubmitButton = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIngredients(event.target.value);
  };

  const handleGetInstructionsButton = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIngredients(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the textareaValue, e.g., send it to the server
    const recipes = await searchRecipeAPI.fetchData(ingredients);

   

  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid text-center">
          {/* <a className="navbar-brand " href="#">Recipe Search</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">LOGO</a>
              <a className="nav-link active" aria-current="page" href="#">Recipes</a>
              
              <a className="nav-link active"  href="#">About Us</a>
            </div>
          </div>
        </div>
      </nav>

      <div>
        <h3 
          className='home-text 
          d-flex 
          align-items-center 
          justify-content-center
          justify-content-sm-between
          flex-sm-row'
          >
          You can brows recipes, search for recipes based on ingredients in your pantry, or create new recipes 
        </h3>
        <Link to="/search">
          <button className="btn btn-lg btn-primary">Start</button>        
        </Link>
       

      </div>

    </div>
  );
}

export default Home;


