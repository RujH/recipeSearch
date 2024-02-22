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

    setRecipe(recipes)
    setShowCard(true)

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
      <div className='row row-cols-1 row-cols-md-2'>

        {
          showCard ? 

            recipe.map((item: any) => (
              <div className="pt-4">
                <div className="col mb-4">
                  <div className="card w-60 ms-4 me-4">
                    <div className="row no-gutters">

                      <div className="col-md-4">
                        <img src= {item.image} width="300" height="300" className="m-2 card-img-left"/>
                      </div>

                      <div className="col-md-8">
                        <div className="card-body">
                        
                          <h3 className="card-title">{item.title}</h3>
                          <h6>Total Calories: {item.calories.toFixed()}</h6>
                          {/* <ul className='list-group'> */}
                            {item.ingredients.map((ingredient: any)=>(
                                <li className='list-group-item text-start'>{ingredient.text}</li>

                            ))
                            }
                          {/* </ul> */}
                          
                          <a href={item.url}>
                            <button 
                              className="btn btn-outline-success" 
                              type="submit" 
                              onClick= {()=>handleGetInstructionsButton}>
                              
                              Full Recipe
                              
                            </button>
                          </a>
                       </div>

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
