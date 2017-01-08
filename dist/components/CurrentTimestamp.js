"use strict";
const React = require("react");
const moment = require("moment-timezone");
class CurrentTimestamp extends React.Component {
    constructor(props, state) {
        super(props);
        this.state = {
            now: moment().tz('PACIFIC/AUCKLAND').format('dddd Do MMMM, h:mm a')
        };
    }
    render() {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-lg-12" },
                "Now: ",
                this.state.now)));
    }
}
exports.CurrentTimestamp = CurrentTimestamp;
//# sourceMappingURL=CurrentTimestamp.js.map