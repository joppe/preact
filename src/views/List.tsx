import {h} from 'src/loader';
import {ListItem} from 'views/ListItem';
import {IRecipe} from 'model/IRecipe';

/**
 * @interface {IListPropsType}
 */
interface IListPropsType {
    recipes: IRecipe[];
}

/**
 * @param {IListPropsType} props
 * @returns {JSX.Element}
 * @constructor
 */
export const List: preact.FunctionalComponent<IListPropsType> = (props: IListPropsType): JSX.Element => {
    return (
        <table className="table">
            <tbody>
                {props.recipes.map((recipe: IRecipe): JSX.Element => {
                    return (
                        <ListItem recipe={recipe} />
                    );
                })}
            </tbody>
        </table>
    );
};
