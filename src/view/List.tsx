import {IRecipe} from 'app/model/IRecipe';
import {ListItem} from 'app/view/ListItem';
import {h} from 'preact';

/**
 * @interface {IListPropsType}
 */
interface IListPropsType {
    recipes: IRecipe[];
}

/**
 * @param {IListPropsType} props
 * @returns {JSX.Element}
 */
export const List: preact.FunctionalComponent<IListPropsType> = (props: IListPropsType): JSX.Element => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                { props.recipes.map((recipe: IRecipe): JSX.Element => {
                    return (
                        <ListItem recipe={ recipe } />
                    );
                }) }
            </tbody>
        </table>
    );
};
