import {h, render} from './preact/loader';
import {Action, createStore, Store} from 'redux';
import {data, RecipeInterface} from './data';
import {List} from './views/List';

const recipes = (state:RecipeInterface[] = [], action:Action):RecipeInterface[] => {
    switch (action.type) {
        default:
            return state;
    }
};

const store:Store<RecipeInterface[]> = createStore(recipes, data);

store.subscribe(():void => {
    window.console.log(store.getState());
});

window['s'] = store;

const Main = () => {
    return (
        <div className="container">
            <List recipes={store.getState()} />
        </div>
    );
};

render(<Main />, document.body);
