/**
 * preamble
 */

console.log("--------------> spoonacular.js included")
var SpoonacularApi = require('./vendor/spoonacular_api/src/com.spoonacular.client/index.js');
var defaultClient = SpoonacularApi.ApiClient.instance;
var apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = "59caaff5a60d431da8469cae85aa6e0b"; 

export default SpoonacularApi;