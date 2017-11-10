import {IRecipe} from 'app/model/IRecipe';
import {h} from 'preact';

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
 */
export const ListItem: preact.FunctionalComponent<IListItemPropsType> = (props: IListItemPropsType): JSX.Element => {
    return (
        <tr>
            <td>{ props.recipe.title }</td>
            <td>{ props.recipe.description }</td>
        </tr>
    );
};
