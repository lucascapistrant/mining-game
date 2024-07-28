class Upgrades {
    constructor() {

    }


}

class AluminumAutoMiner {
    constructor() {
        this.html = document.querySelector('#aluminumAutoMiner');

        this.image = document.querySelector('#aluminumAutoMiner .upgrade__img');
        this.description = document.querySelector('#aluminumAutoMiner .upgrade__description');

        this.priceToken = document.querySelector('#aluminumAutoMiner .upgrade__price');
        this.levelToken = document.querySelector('#aluminumAutoMiner .upgrade__level');

        this.price = 5;
        this.priceMultiplier = 2.5;
        this.aluminumPerInterval  = 1;
        this.aluminumGrowthRate = 2;
        this.level = 0;
        this.maxLevel = 10;

        this.html.addEventListener("click", this.buy);
        this.image.addEventListener("click", (e) => {
          this.showDescription();
          e.stopPropagation();
        });
    }
    
    buy = () => {
      if(this.price <= money && this.level < this.maxLevel) {
        topStats.changeMoneyAmount(-this.price);
        this.price *= this.priceMultiplier;
        this.price = Math.floor(this.price * 10) / 10;
        this.updatePriceToken();
        this.upgrade();
        this.updateLevelToken();
      }
    }

    showDescription = () => {
      this.description.style.display = (this.description.style.display === "none") ? "block" : "none";
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