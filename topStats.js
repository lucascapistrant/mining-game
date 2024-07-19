class TopStats {
    constructor() {
        this.moneyAmountHTML = document.querySelector('.moneyAmount');
    }

    changeMoneyAmount(amount) {
        money+= amount;
        this.moneyAmountHTML.innerHTML = money;
    }
}

const topStats = new TopStats;