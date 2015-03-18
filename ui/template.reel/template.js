/**
 * @module ui/template.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Template
 * @extends Component
 */
exports.Template = Component.specialize(/** @lends Template# */ {
    constructor: {
        value: function Template() {
            this.super();
        }
    }
});
