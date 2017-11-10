import {sample} from 'app/sample';
import {List} from 'app/view/List';
import {h, render} from 'preact';

/**
 * Render the component as a child of the body element
 */
render(
    <List recipes={ sample } />,
    window.document.getElementById('app')
);
