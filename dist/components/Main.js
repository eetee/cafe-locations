"use strict";
const React = require("react");
const CurrentLocationContainer_1 = require("../containers/CurrentLocationContainer");
const StoreListContainer_1 = require("../containers/StoreListContainer");
class Main extends React.Component {
    constructor(props, state) {
        super();
    }
    render() {
        return (React.createElement("section", null,
            React.createElement("div", { className: "container-fluid" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-8 col-lg-offset-2 col-xs-12 col-sm-12 col-md-12" },
                        React.createElement("p", null,
                            "More details here: ",
                            React.createElement("a", { href: "https://github.com/eetee/supreme-locations" }, "https://github.com/eetee/supreme-locations"),
                            React.createElement("br", null),
                            React.createElement("small", null, "Source code, potential enhancements etc.")),
                        React.createElement("p", null, "Disclaimer: I have no affiliation to the roaster, they have neither commissioned this nor is there any endorsement."))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-8 col-lg-offset-2 col-xs-12 col-sm-12 col-md-12" },
                        React.createElement(CurrentLocationContainer_1.CurrentLocationContainer, null),
                        React.createElement(StoreListContainer_1.StoreListContainer, null))))));
    }
}
exports.Main = Main;
//# sourceMappingURL=Main.js.map