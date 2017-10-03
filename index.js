var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Inferno from 'inferno';
import Component from 'inferno-component';
var Portal = /** @class */ (function (_super) {
    __extends(Portal, _super);
    function Portal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultNode = null;
        return _this;
    }
    Portal.prototype.componentWillUnmount = function () {
        if (this.defaultNode) {
            document.body.removeChild(this.defaultNode);
        }
        this.defaultNode = null;
    };
    Portal.prototype.render = function (props) {
        var node = props.node;
        if (node) {
            if (this.defaultNode) {
                document.body.removeChild(this.defaultNode);
                this.defaultNode = null;
            }
        }
        else {
            node = this.defaultNode;
            if (!node) {
                node = this.defaultNode = document.createElement('div');
                document.body.appendChild(node);
            }
        }
        Inferno.render(props.children || null, node);
        return null;
    };
    return Portal;
}(Component));
export { Portal };
//# sourceMappingURL=index.js.map