interface Profit {
    id: string;
    amount: number;
    getProfit: Function;
}

class UserProfit{
    id: string;
    amount: number;
    constructor(id: string, amount: number){
        this.id = id;
        this.amount = amount;
    }

    getProfit(){
        return this.amount
    }
}

const profit: Profit = new UserProfit("12345", 1252)

console.log(profit.getProfit());
