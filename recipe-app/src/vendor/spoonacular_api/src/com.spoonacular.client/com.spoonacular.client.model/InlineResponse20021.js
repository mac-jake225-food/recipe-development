/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over 380,000 recipes, thousands of ingredients, 800,000 food products, and 100,000 menu items. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse20021Calories from './InlineResponse20021Calories';

/**
 * The InlineResponse20021 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021
 * @version 1.0
 */
class InlineResponse20021 {
    /**
     * Constructs a new <code>InlineResponse20021</code>.
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021
     * @param calories {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories} 
     * @param carbs {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories} 
     * @param fat {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories} 
     * @param protein {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories} 
     * @param recipesUsed {Number} 
     */
    constructor(calories, carbs, fat, protein, recipesUsed) { 
        
        InlineResponse20021.initialize(this, calories, carbs, fat, protein, recipesUsed);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, calories, carbs, fat, protein, recipesUsed) { 
        obj['calories'] = calories;
        obj['carbs'] = carbs;
        obj['fat'] = fat;
        obj['protein'] = protein;
        obj['recipesUsed'] = recipesUsed;
    }

    /**
     * Constructs a <code>InlineResponse20021</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021} The populated <code>InlineResponse20021</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20021();

            if (data.hasOwnProperty('calories')) {
                obj['calories'] = InlineResponse20021Calories.constructFromObject(data['calories']);
            }
            if (data.hasOwnProperty('carbs')) {
                obj['carbs'] = InlineResponse20021Calories.constructFromObject(data['carbs']);
            }
            if (data.hasOwnProperty('fat')) {
                obj['fat'] = InlineResponse20021Calories.constructFromObject(data['fat']);
            }
            if (data.hasOwnProperty('protein')) {
                obj['protein'] = InlineResponse20021Calories.constructFromObject(data['protein']);
            }
            if (data.hasOwnProperty('recipesUsed')) {
                obj['recipesUsed'] = ApiClient.convertToType(data['recipesUsed'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories} calories
 */
InlineResponse20021.prototype['calories'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories} carbs
 */
InlineResponse20021.prototype['carbs'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories} fat
 */
InlineResponse20021.prototype['fat'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories} protein
 */
InlineResponse20021.prototype['protein'] = undefined;

/**
 * @member {Number} recipesUsed
 */
InlineResponse20021.prototype['recipesUsed'] = undefined;






export default InlineResponse20021;

