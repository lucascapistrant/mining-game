{/* <div class="upgrade" id="autoMiner">
            <header class="upgrade__header">
              <img class="upgrade__img" src="/assets/temporarytile.png" alt="AutoMiner Upgrade"></img>
              <h2 class="upgrade__name">Aluminum Auto Miner</h2>
              <p class="upgrade__price" id="autoMiner">5</p>
            </header>
            <div class="upgrade__body">
              <div class="dropdown">
                <header class="dropdown__heading">Show Description</header>
                <div class="dropdown__body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis in
                  nobis eius similique. Iste optio eos velit autem aperiam? Dolorum natus
                  voluptatum alias odit, tenetur similique porro doloribus quia ut!
                </div>
              </div>
            </div>
          </div> */}

class Upgrades {
    constructor() {

    }


}

class AluminumAutoMiner {
    constructor() {
        this.html = document.querySelector('#aluminumAutoMiner');
        this.buyBtn = this.html.children[1].firstElementChild.firstElementChild.childNodes[1];
        this.priceToken = this.html.children[0].children[2];
        this.price = 5;
        this.priceMultiplier = 2.5;

        this.buyBtn.addEventListener("click", this.buy);
    }
    
    buy() {
      if(aluminumAutoMiner.price <= money) {
        topStats.changeMoneyAmount(-aluminumAutoMiner.price);
        aluminumAutoMiner.price *= aluminumAutoMiner.priceMultiplier;
        aluminumAutoMiner.price = Math.floor(aluminumAutoMiner.price * 10) / 10;
        aluminumAutoMiner.updatePriceToken();
        aluminumAutoMiner.upgrade();
      }
    }

    upgrade() {
        setInterval(() => {
            oreClass.addOre("aluminum", 1);
        }, 5000);
    }

    updatePriceToken() {
      this.priceToken.innerHTML = this.price;
    }
}
const upgrade = new Upgrades;
const aluminumAutoMiner = new AluminumAutoMiner;