"use strict";
const React = require("react");
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
            'border': '0'
        };
        let mapUrl = '';
        if (this.props.store.latitude !== 0) {
            mapUrl = `https://www.google.com/maps/embed/v1/place?q=${this.props.store.latitude}%2C%20${this.props.store.longitude}&key=AIzaSyBfQiuNkny6qftAKK3ZxRexheF6YPke0v0`;
        }
        return (React.createElement("div", { className: "row", style: blockStyle },
            React.createElement("div", { className: "col-xs-12" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-4 col-md-6 col-sm-6 col-xs-6" }, "Name:"),
                    React.createElement("div", { className: "col-lg-8 col-md-6 col-sm-6 col-xs-6" }, this.props.store.name)),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-4 col-md-6 col-sm-6 col-xs-6" }, "Address:"),
                    React.createElement("div", { className: "col-lg-8 col-md-6 col-sm-6 col-xs-6" }, this.props.store.address)),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-4 col-md-6 col-sm-6 col-xs-6" }, "Co-ordinates:"),
                    React.createElement("div", { className: "col-lg-8 col-md-6 col-sm-6 col-xs-6" },
                        this.props.store.latitude,
                        ", ",
                        this.props.store.longitude)),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-4 col-md-6 col-sm-6 col-xs-6" }, "Distance"),
                    React.createElement("div", { className: "col-lg-8 col-md-6 col-sm-6 col-xs-6" },
                        this.props.store.distance,
                        "kms")),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-xs-12 text-center" },
                        React.createElement("iframe", { width: "600", height: "450", frameBorder: "0", style: iframeStyle, src: mapUrl }))))));
    }
}
exports.Store = Store;
//# sourceMappingURL=Store.js.map