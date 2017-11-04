import {h} from 'src/loader';
import {IRecipe} from 'model/IRecipe';

/**
 * @inheritDoc IListItemPropsType
 */
interface IListItemPropsType {
    /**
     * @type {IRecipe}
     */
    recipe: IRecipe;
}

/**
 * @param {IListItemPropsType} props
 * @returns {JSX.Element}
 * @constructor
 */
export const ListItem: preact.FunctionalComponent<IListItemPropsType> = (props: IListItemPropsType): JSX.Element => {
    return (
        <tr>
            <td>{props.recipe.title}</td>
        </tr>
    );
};
