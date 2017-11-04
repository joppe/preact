import {IDuration} from 'model/IDuration';
import {IIngredient} from 'model/IIngredient';

/**
 * @interface IRecipe
 */
export interface IRecipe {
    /**
     * @type {number}
     */
    id: number;

    /**
     * @type {string}
     */
    title: string;

    /**
     * @type {string}
     */
    cuisine?: string;

    /**
     * @type {string}
     */
    course?: string;

    /**
     * @type {IDuration}
     */
    time?: IDuration;

    /**
     * @type {string}
     */
    style?: string;

    /**
     * @type {number}
     */
    servings?: number;

    /**
     * @type {string}
     */
    description: string;

    /**
     * @type {string}
     */
    ingredients: IIngredient[];

    /**
     * @type {string[]}
     */
    instructions?: string[];

    /**
     * @type {string}
     */
    source?: string;

    /**
     * @type {string}
     */
    image?: string;

    /**
     * @type {string}
     */
    rating?: number;
}
