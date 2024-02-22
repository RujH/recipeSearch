interface RecipeInfo{
    calories: Number;
    title: string;
    healthLabels: string[]; 
    image: string;
    ingredients: [
        {
            text: string,
            quantity: Number,
            measure: string
        }
    ];
    mealType: string;
    url: string

}
export default RecipeInfo;