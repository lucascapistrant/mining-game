class Ores {
    constructor() {
        this.aluminum = 0;
        this.aluminumHTML = document.querySelector('#aluminum');
        
        this.iron = 0;
        this.ironHTML = document.querySelector('#iron');
        
        this.nickel = 0;
        this.nickelHTML = document.querySelector('#nickel');
        
        this.lead = 0;
        this.leadHTML = document.querySelector('#lead');
        
        this.copper = 0;
        this.copperHTML = document.querySelector('#copper');
        
        this.zinc = 0;
        this.zincHTML = document.querySelector('#zinc');
        
        this.tin = 0;
        this.tinHTML = document.querySelector('#tin');
        
        this.silver = 0;
        this.silverHTML = document.querySelector('#silver');

        this.gold = 0;
        this.goldHTML = document.querySelector('#gold');

        this.platinum = 0;
        this.platinumHTML = document.querySelector('#platinum');

        this.slots = document.querySelectorAll('.itemSlot');
    }

    updateHTML() {
        this.aluminumHTML.innerText = this.aluminum;
        this.ironHTML.innerText = this.iron;
        this.nickelHTML.innerText = this.nickel;
        this.leadHTML.innerText = this.lead;
        this.copperHTML.innerText = this.copper;
        this.zincHTML.innerText = this.zinc;
        this.tinHTML.innerText = this.tin;
        this.silverHTML.innerText = this.silver;
        this.goldHTML.innerText = this.gold;
        this.platinumHTML.innerText = this.platinum;
    }

    addOre(type, amount) {
        if (this.hasOwnProperty(type)) {
            this[type] += amount;
            this.updateHTML();
        }
    }
}

const oreClass = new Ores;