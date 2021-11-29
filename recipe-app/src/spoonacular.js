/**
 * preamble
 */

console.log("--------------> spoonacular.js included")
var SpoonacularApi = require('./vendor/spoonacular_api/src/com.spoonacular.client/index.js');
var defaultClient = SpoonacularApi.ApiClient.instance;
var apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = "4aae01ae2ec048a5a7fa6ed6bd3d292f"; 

export default SpoonacularApi;