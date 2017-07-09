System.register(["./preact/loader", "redux"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var loader_1, redux_1, counter, store, Main;
    return {
        setters: [
            function (loader_1_1) {
                loader_1 = loader_1_1;
            },
            function (redux_1_1) {
                redux_1 = redux_1_1;
            }
        ],
        execute: function () {
            counter = function (state, action) {
                if (state === void 0) { state = 0; }
                switch (action.type) {
                    case 'INCREMENT':
                        return state + 1;
                    case 'DECREMENT':
                        return state - 1;
                    default:
                        return state;
                }
            };
            store = redux_1.createStore(counter);
            store.subscribe(function () {
                window.console.log(store.getState());
            });
            window['s'] = store;
            Main = function () {
                return (loader_1.h("div", null, "Preact FTW!"));
            };
            loader_1.render(loader_1.h(Main, null), document.body);
        }
    };
});
//# sourceMappingURL=main.js.map