const axios = require("axios");

const zomatoAPI = {
    //To retrieve city ID and city type for user input city
    getDataForCity: async function (city) {
        try {
            const URL = `https://developers.zomato.com/api/v2.1/locations?query=${city}`;

            const { data } = await axios.get(URL, {
                headers: {
                    "Content-Type": "application/json",
                    "user-key": "c1f4ea8a1c6b7a64553275f0f30fa8d6",
                },
            })
            // console.log(data.location_suggestions[0].entity_type)
            const cityID = data.location_suggestions[0].entity_id
            const cityType = data.location_suggestions[0].entity_type
            return { cityID, cityType }
        }
        catch (error) {
            console.log(error);
        };
    },
    //City ID and city type to be used to search for list of best rated restaurants in city
    getCityList: async function (id, type) {
        try {
            const URL = `https://developers.zomato.com/api/v2.1/location_details?entity_id=${id}&entity_type=${type}`;

            const { data } = await axios.get(URL, {
                headers: {
                    "Content-Type": "application/json",
                    "user-key": "c1f4ea8a1c6b7a64553275f0f30fa8d6",
                },
            })
            const restaurantList = data.best_rated_restaurant
            return restaurantList
        }
        catch (error) {
            console.log(error);
        };
    },
    //Function to retrieve restaurant list using data retrieved from functions getDataForCity() and getCityList()
    retrieveRestaurants: async function (city) {
        try {
            const { cityID, cityType } = await this.getDataForCity(`${city}`)
            const list = await this.getCityList(`${cityID}`, `${cityType}`)
            return list
        }
        catch (err) {
            console.log(err)
        }
    },
    //To retrieve
    restaurantInformation: async function (resID) {
        try {
            const URL = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${resID}`;

            const { data } = await axios.get(URL, {
                headers: {
                    "Content-Type": "application/json",
                    "user-key": "c1f4ea8a1c6b7a64553275f0f30fa8d6",
                },
            })
            const restaurantInfo = data
            return restaurantInfo

        }
        catch (err) {
            console.log(err)
        }
    }


}
// zomatoAPI.retrieveRestaurants("sydney")
// zomatoAPI.getDataForCity("melbourne")
zomatoAPI.restaurantInformation(16585235)

module.exports = zomatoAPI
