"use strict";
const React = require("react");
class CurrentLocation extends React.Component {
    constructor(props, state) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-lg-12" },
                "Current Location: ",
                this.props.latitude,
                ", ",
                this.props.longitude)));
    }
}
exports.CurrentLocation = CurrentLocation;
//# sourceMappingURL=CurrentLocation.js.map