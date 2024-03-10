import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import searchRecipeAPI from "../service/recipeSearchAPI"
import RecipeInfo from "../utils/recipeInfo"

const Search = () =>  {

  const defaultValues: RecipeInfo = {
    calories:-1,
    title: "",
    healthLabels: [], 
    image: "",
    ingredients: [
      {
        text: "",
        quantity: -1,
        measure: ""
      }
    ],
    mealType: "",
    url: ""

}

  const [showCard, setShowCard] = useState<boolean>(false);
  const [ingredients, setIngredients] = useState<string>("");
  const [recipe, setRecipe] = useState<RecipeInfo[]>([defaultValues]);

  const handleSubmitButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIngredients(event.target.value);
  };

  const openUrlInNewPage = (url: string) => {
    window.open(url, '_blank');
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the textareaValue, e.g., send it to the server
    const recipes = await searchRecipeAPI.fetchData(ingredients);

    setRecipe(recipes)
    console.log(recipes[0].url)
    setShowCard(true)

  };

  return (
    <div >
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
            <input 
              className="form-control me-2" 
              placeholder="Enter ingredients" 
              aria-label="Search"
              value={ingredients}
              onChange={handleSubmitButton}
            />
            
            <button className="btn btn-primary search-btn" type="submit">Search</button>
          </form>

        </div>

      </div>
      <div className='row row-cols-1 row-cols-md-2'>

        {
          showCard ? 

          recipe.map((item: any) => (
            <div className="pt-4 d-flex justify-content-center">
              <div className="card mb-2 shadow-lg card-custom"> 
                <div className="row">
                  <div className="col-md-5 d-flex align-items-center justify-content-center image-padding">
                    <img src={item.image} alt="Recipe" className="img-fluid" />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body d-flex flex-column text-dark">
                      <h3 className="card-title">{item.title}</h3>
                      <h6>Total Calories: {item.calories.toFixed()}</h6>
                      <ul className="list-group list-group-flush list-custom"> 
                        {item.ingredients.map((ingredient: any) => (
                          <li className="list-group-item text-start">{ingredient.text}</li>
                        ))}
                      </ul>
                      <button 
                        className="btn btn-primary mt-4" 
                        type="submit" 
                        onClick={() => openUrlInNewPage(item.url)}>
                        Full Recipe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))                                  
          
          :
          <div></div>

        }

      </div>

    </div>
  );
}

export default Search;
