"use strict";
const React = require("react");
const Store_1 = require("./Store");
class StoreList extends React.Component {
    constructor(props, state) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "container-fluid" }, this.props.stores.slice(0, 9).map((store, i) => {
            return React.createElement(Store_1.Store, { store: store, key: i });
        })));
    }
}
exports.StoreList = StoreList;
//# sourceMappingURL=StoreList.js.map