"use strict";
const React = require("react");
class HoursDisplay extends React.Component {
    constructor(props, state) {
        super(props);
    }
    render() {
        const formatHoursString = (hours) => {
            if (!hours)
                return '';
            return hours.map((dayHours) => {
                return dayHours.join(' - ');
            }).join(', ');
        };
        const pStyle = {
            'margin': '0 0 3px 0'
        };
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-lg-4 col-md-6 col-sm-6 col-xs-6" }, "Hours:"),
            React.createElement("div", { className: "col-lg-8 col-md-6 col-sm-6 col-xs-6" },
                React.createElement("p", { style: pStyle },
                    "Sun: ",
                    formatHoursString(this.props.hours.sun)),
                React.createElement("p", { style: pStyle },
                    "Mon: ",
                    formatHoursString(this.props.hours.mon)),
                React.createElement("p", { style: pStyle },
                    "Tue: ",
                    formatHoursString(this.props.hours.tue)),
                React.createElement("p", { style: pStyle },
                    "Wed: ",
                    formatHoursString(this.props.hours.wed)),
                React.createElement("p", { style: pStyle },
                    "Thu: ",
                    formatHoursString(this.props.hours.thu)),
                React.createElement("p", { style: pStyle },
                    "Fri: ",
                    formatHoursString(this.props.hours.fri)),
                React.createElement("p", { style: pStyle },
                    "Sat: ",
                    formatHoursString(this.props.hours.sat)))));
    }
}
exports.HoursDisplay = HoursDisplay;
//# sourceMappingURL=HoursDisplay.js.map