import axios from 'axios';


const searchRecipeAPI = {

    fetchData: async () => {
        try {
            axios({
                method: 'get',
                url: `https://api.edamam.com/api/recipes/v2`,
                withCredentials: false,
                params: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "type": "public",
                    "app_id": "e15dfdd0",
                    "app_key": "37050fa2a6145e6dcce970921a7f40e7" ,
                    "q": "chicken",
                },
              }).then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        } catch (error) {
          console.error(error);
        }
    },
}
    
export default searchRecipeAPI;