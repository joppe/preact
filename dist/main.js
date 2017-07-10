System.register(["./preact/loader", "redux", "./data", "./views/List"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var loader_1, redux_1, data_1, List_1, recipes, store, Main;
    return {
        setters: [
            function (loader_1_1) {
                loader_1 = loader_1_1;
            },
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            },
            function (List_1_1) {
                List_1 = List_1_1;
            }
        ],
        execute: function () {
            recipes = function (state, action) {
                if (state === void 0) { state = []; }
                switch (action.type) {
                    default:
                        return state;
                }
            };
            store = redux_1.createStore(recipes, data_1.data);
            store.subscribe(function () {
                window.console.log(store.getState());
            });
            window['s'] = store;
            Main = function () {
                return (loader_1.h("div", { className: "container" },
                    loader_1.h(List_1.List, { recipes: store.getState() })));
            };
            loader_1.render(loader_1.h(Main, null), document.body);
        }
    };
});
//# sourceMappingURL=main.js.map