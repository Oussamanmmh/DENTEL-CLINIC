const GOOGLE_PLACES_API_URL = 'https://maps.googleapis.com/maps/api/place/details/json';
const PLACE_ID = '648W+6P Genève, Suisse'; // Remplacez par l'ID de votre établissement
const API_KEY = 'AIzaSyBMgicf5Tbgk6C69ZBnkl9MGahvHHjIJME'; // Remplacez par votre clé API
const { getJson } = require("serpapi");



// export async function getGoogleReviews() {
//   try {
//     const response = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=CHD%20Clinique%20d'Hygiène%20Dentaire%20Genève%20Cornavin&inputtype=textquery&fields=place_id&key=${API_KEY}`);
//     console.log(response.data.result.reviews);
//     return response.data.result.reviews;
    
//   } catch (error) {
//     console.error('Error fetching Google reviews:', error);
//     return [];
//   }
// }

export default async function getGoogleReview() {
    return new Promise((resolve, reject) => { 
        try{
        getJson({
            engine: "google_maps_reviews",
            place_id: "ChIJ51pdg9R6jEcRqb046okiAjM",
            hl: "fr",
            api_key: process.env.SERP_KEY
          }, (json) => {
            console.log(json["reviews"]);
            resolve(json["reviews"]);
          });
        }
        catch(error){
            console.error('Error fetching Google reviews:', error);
            reject([]);
        }
    });
}
