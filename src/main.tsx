import {sample} from 'app/sample';
import {List} from 'app/view/List';
import {h, render} from 'preact';
import {IRecipe} from 'app/model/IRecipe';

/**
 * Render the component as a child of the body element
 */
render(
    <List recipes={ sample as IRecipe[] } />,
    window.document.getElementById('app')
);
