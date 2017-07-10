import {h} from '../preact/loader';
import {RecipeInterface} from '../data';
import {ListItem} from './ListItem';

interface ListPropsTypeInterface {
    recipes:RecipeInterface[];
}

export const List:preact.FunctionalComponent<ListPropsTypeInterface> = (props:ListPropsTypeInterface):JSX.Element => {
    return (
        <table className="table">
            <tbody>
                {props.recipes.map((recipe:RecipeInterface) => {
                    return (
                        <ListItem recipe={recipe} />
                    );
                })}
            </tbody>
        </table>
    );
};
