import axios from 'axios';
import RecipeInfo from "../utils/recipeInfo"


const searchRecipeAPI = {
    fetchData: async (ingredients:string): Promise<RecipeInfo[]> => {
        try {
            const response = await axios({
                method: 'get',
                url: `https://api.edamam.com/api/recipes/v2`,
                withCredentials: false,
                params: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "type": "public",
                    "app_id": "e15dfdd0",
                    "app_key": "37050fa2a6145e6dcce970921a7f40e7" ,
                    "q": ingredients,
                },
              });
              console.log("data", response.data.hits)

              return  response.data.hits.map((hit: any) => {
                const recipeInfo: RecipeInfo = {
                    calories: hit.recipe.calories,
                    title: hit.recipe.label,
                    healthLabels: hit.recipe.healthLabels,
                    image: hit.recipe.image,
                    ingredients: hit.recipe.ingredients.map((item:any)=>{
                       return{
                        text: item.text,
                        quantity: item.quantity,
                        measure: item.measure
                       }
                        
                    }),
                    mealType: hit.recipe.mealType,
                    url: hit.recipe.url
                }
                return recipeInfo
              })
        } catch (error) {
          console.error(error);
          throw error;
        }
    },
}
    
export default searchRecipeAPI;