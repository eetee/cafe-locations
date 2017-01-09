"use strict";
const React = require("react");
const HoursDisplay_1 = require("./HoursDisplay");
const round = require("lodash/round");
class Store extends React.Component {
    constructor(props, state) {
        super(props);
    }
    render() {
        const blockStyle = {
            'margin': '10px 0px',
            'borderBottom': '1px solid black',
            'padding': '5px'
        };
        const iframeStyle = {
            'border': '0',
            'width': '100%',
            'height': '350px',
        };
        const displayHours = !!this.props.store.hours.sun;
        let mapUrl = '';
        const addressString = this.props.store.address.replace(' ', '+');
        if (this.props.store.latitude !== 0) {
            mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBfQiuNkny6qftAKK3ZxRexheF6YPke0v0&q=${addressString}`;
        }
        return (React.createElement("div", { className: "row", style: blockStyle },
            React.createElement("div", { className: "col-xs-12" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-6 col-md-6 col-sm-12 col-xs-12" },
                        React.createElement("h4", null, this.props.store.name),
                        React.createElement("p", null, this.props.store.address),
                        React.createElement("p", null,
                            round(this.props.store.distance, 1),
                            "kms (",
                            this.props.store.latitude,
                            ", ",
                            this.props.store.longitude,
                            ")"),
                        displayHours && React.createElement(HoursDisplay_1.HoursDisplay, { hours: this.props.store.hours })),
                    React.createElement("div", { className: "col-lg-6 col-md-6 col-sm-12 col-xs-12" },
                        React.createElement("iframe", { frameBorder: "0", style: iframeStyle, src: mapUrl }))))));
    }
}
exports.Store = Store;
//# sourceMappingURL=Store.js.map