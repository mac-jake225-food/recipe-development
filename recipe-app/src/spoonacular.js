/**
 * preamble
 */

console.log("--------------> spoonacular.js included")
var SpoonacularApi = require('./vendor/spoonacular_api/src/com.spoonacular.client/index.js');
var defaultClient = SpoonacularApi.ApiClient.instance;
var apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = "414648cecf9e476f80cfd25a256f8ba5"; 

export default SpoonacularApi;