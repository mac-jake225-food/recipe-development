/**
 * preamble
 */

console.log("--------------> spoonacular.js included")
var SpoonacularApi = require('./vendor/spoonacular_api/src/com.spoonacular.client/index.js');
var defaultClient = SpoonacularApi.ApiClient.instance;
var apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = "8ab395d676c7473c8820769b9f720ac0"; 

export default SpoonacularApi;