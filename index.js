let money = 1000;
let minePrice = 5;
topStats.changeMoneyAmount(0);

// mining stats
let mineYield = 5;

class Mine {
    constructor() {
        this.html = document.querySelector('.clicker');
        this.probabilities = {
            aluminum: 0.7,
            iron: 0.2,
            nickel: 0.1,
            lead: 0.05,
            copper: 0.04,
            zinc: 0.03,
            tin: 0.02,
            silver: 0.01,
            gold: 0.005,
            platinum: 0.005
        };
    }

    mineListener() {
        this.html.addEventListener("click", () => this.authorizeMine());
    }

    authorizeMine() {
        if(money >= minePrice) {
            topStats.changeMoneyAmount(-minePrice);
            mine.mine();
        }
    }

    mine() {
        const ores = Object.keys(this.probabilities);
        const results = {};

        for (let i = 0; i < mineYield; i++) {
            const rand = Math.random();
            let cumulative = 0;
            for (const ore of ores) {
                cumulative += this.probabilities[ore];
                if (rand < cumulative) {
                    if (!results[ore]) {
                        results[ore] = 0;
                    }
                    results[ore]++;
                    break;
                }
            }
        }

        for (const ore in results) {
            oreClass.addOre(ore, results[ore]);
        }
        return results;
    }
}

const mine = new Mine;
mine.mineListener();
