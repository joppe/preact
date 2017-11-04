import {IIngredientAmount} from 'model/IIngredientAmount';

/**
 * @type {IIngredient}
 */
export interface IIngredient {
    /**
     * @type {string}
     */
    name: string;

    /**
     * @type {IIngredientAmount}
     */
    amount: IIngredientAmount;
}
