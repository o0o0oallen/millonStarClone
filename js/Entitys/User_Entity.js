/*
* Ycj
* 2018 - 05 - 17
* 用户实体类
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User_Entity = /** @class */ (function (_super) {
    __extends(User_Entity, _super);
    function User_Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User_Entity.prototype.LoadUserDataOK = function (str) {
        UI.Initialize();
        UI.Display_Or_Hidden_Load_Progress_UI(false);
        UI.Display_Or_Hidden_Main_UI(true);
    };
    return User_Entity;
}(Base_User_Entity));
//# sourceMappingURL=User_Entity.js.map