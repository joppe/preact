System.register(["preact"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var preact_1, Component, h, render, rerender, cloneElement;
    return {
        setters: [
            function (preact_1_1) {
                preact_1 = preact_1_1;
            }
        ],
        execute: function () {
            window.console.log(preact_1.default.h);
            exports_1("Component", Component = preact_1.default.Component);
            exports_1("h", h = preact_1.default.h);
            exports_1("render", render = preact_1.default.render);
            exports_1("rerender", rerender = preact_1.default.rerender);
            exports_1("cloneElement", cloneElement = preact_1.default.cloneElement);
        }
    };
});
//# sourceMappingURL=loader.js.map