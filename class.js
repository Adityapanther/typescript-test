var UserProfit = /** @class */ (function () {
    function UserProfit(id, amount) {
        this.id = id;
        this.amount = amount;
    }
    UserProfit.prototype.getProfit = function () {
        return this.amount;
    };
    return UserProfit;
}());
var profit = new UserProfit("12345", 1252);
console.log(profit.getProfit());
