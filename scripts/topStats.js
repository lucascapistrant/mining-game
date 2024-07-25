class TopStats {
    constructor() {
        this.moneyAmountHTML = document.querySelector('.moneyAmount');
    }

    changeMoneyAmount(amount) {
        money+= amount;
        money = Math.floor(money * 10) / 10;
        this.moneyAmountHTML.innerHTML = money;
    }
}

const topStats = new TopStats;