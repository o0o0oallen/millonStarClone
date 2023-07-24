/**
* name
*/
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = 0;
        this.dataStore = [];
    }
    Stack.prototype.Push = function (element) {
        this.dataStore[this.top++] = element;
    };
    Stack.prototype.Pop = function () {
        return this.dataStore[--this.top];
    };
    Stack.prototype.Peek = function () {
        return this.dataStore[this.top - 1];
    };
    Stack.prototype.Clear = function () {
        this.top = 0;
    };
    Stack.prototype.Length = function () {
        return this.top;
    };
    return Stack;
}());
//# sourceMappingURL=Stack.js.map