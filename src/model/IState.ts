import {IRecipe} from 'app/model/IRecipe';

/**
 * @interface IState
 */
export interface IState {
    [id: number]: IRecipe;
}
