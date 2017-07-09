import {h, render} from './preact/loader';
import {Action, createStore, Store} from 'redux';

const counter = (state:number = 0, action:Action):number => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store:Store<number> = createStore(counter);

store.subscribe(():void => {
    window.console.log(store.getState());
});

window['s'] = store;

const Main = () => {
    return (
        <div>Preact FTW!</div>
    );
};

render(<Main />, document.body);
