/**
 * preamble
 */

console.log("--------------> spoonacular.js included")
var SpoonacularApi = require('./vendor/spoonacular_api/src/com.spoonacular.client/index.js');
var defaultClient = SpoonacularApi.ApiClient.instance;
var apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = "1d2d98120390424bb719af6440f2044c"; 

export default SpoonacularApi;