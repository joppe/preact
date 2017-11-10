import {IRecipe} from 'app/model/IRecipe';

/**
 * The available action types
 *
 * @enum {string}
 */
export enum RecipeActionType {
    CREATE = 'RECIPE_CREATE'
}

/**
 * @interface IRecipeCreateAction
 */
export interface IRecipeCreateAction {
    /**
     * @type {IRecipe}
     */
    recipe: IRecipe;

    /**
     * @type {string}
     */
    type: RecipeActionType.CREATE;
}

/**
 * @param {IRecipe} recipe
 * @return {IRecipeCreateAction}
 */
export const create: (recipe: IRecipe) => IRecipeCreateAction = (recipe: IRecipe): IRecipeCreateAction => {
    return {
        type: RecipeActionType.CREATE,
        recipe
    };
};
