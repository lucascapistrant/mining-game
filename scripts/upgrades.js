class Upgrades {
    constructor() {

    }


}

class AluminumAutoMiner {
    constructor() {
        this.html = document.querySelector('#aluminumAutoMiner');

        this.buyBtn = this.html.children[1].firstElementChild.firstElementChild.childNodes[1];
        this.priceToken = this.buyBtn.childNodes[1];
        this.levelToken = this.html.children[0].children[2];

        this.price = 5;
        this.priceMultiplier = 2.5;
        this.aluminumPerInterval  = 1;
        this.aluminumGrowthRate = 2;
        this.level = 0;

        this.buyBtn.addEventListener("click", this.buy);
    }
    
    buy = () => {
      if(this.price <= money) {
        topStats.changeMoneyAmount(-this.price);
        this.price *= this.priceMultiplier;
        this.price = Math.floor(this.price * 10) / 10;
        this.updatePriceToken();
        this.upgrade();
        this.updateLevelToken();
      }
    }

    upgrade() {
        if(this.level === 0) {
          setInterval(() => {
              oreClass.addOre("aluminum", this.aluminumPerInterval);
          }, 5000);
        }
        this.aluminumPerInterval *= this.aluminumGrowthRate;
        console.log(this.aluminumPerInterval);
        this.level++;
    }

    updatePriceToken() {
      this.priceToken.innerHTML = this.price;
    }

    updateLevelToken() {
      this.levelToken.innerHTML = this.level;
    }
}
const upgrade = new Upgrades;
const aluminumAutoMiner = new AluminumAutoMiner;