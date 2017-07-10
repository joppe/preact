import {h} from '../preact/loader';
import {RecipeInterface} from '../data';

interface ListItemPropsTypeInterface {
    recipe:RecipeInterface;
}

export const ListItem:preact.FunctionalComponent<ListItemPropsTypeInterface> = (props:ListItemPropsTypeInterface):JSX.Element => {
    return (
        <tr>
            <td>{props.recipe.title}</td>
        </tr>
    );
};
