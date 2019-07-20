function fighter(obj) {
    let name = obj.name;
    let damage = obj.damage;
    let agility = obj.agility;
    let hp= obj.hp;
    let wins = 0;
    let losses = 0;
    let magicNumber = 100;
    
    this.getName = function () {
        return name;
    }
    this.getDamage = function () {
        return damage;
    }
    this.getAgility = function () {
        return agility;
    }
    this.getHealth = function () {
        return hp;
    }
    this.addWin = function () {
        wins+=1;
    }
    this.addLoss = function () {
        losses+=1;
    }
    this.heal = function (heal) {
        if (hp+heal > magicNumber) {
        hp = magicNumber;
        } else {
        hp +=heal;
        }
        return hp;
    }
    this.attack = function (defender) {
        let fighterAttack = magicNumber - defender.getAgility();
        let randomAttack = Math.floor(Math.random()*magicNumber);
        if (fighterAttack >= randomAttack) {
        defender.dealDamage(this.getDamage());
        console.log(`${name} make ${damage} damage to ${defender.getName()}`);
        } else {
            console.log(`${name} attack missed`);
        }
    }
    this.logCombatHistory = function() {
        console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`);
    }
    this.dealDamage = function(damageOp) {
        if (hp > 0 && hp > damageOp) {
            hp -= damageOp;
        } else {
            hp = 0;
        }
    }
}
function battle(fighter1, fighter2) {
    if (fighter1.getHealth() === 0) {
        console.log(`${fighter1.getName()} is dead and can't fight`);
    } else if (fighter2.getHealth() === 0) {
        console.log(`${fighter2.getName()} is dead and can't fight`);
    } else {
        let change = true;
        while (fighter1.getHealth() !== 0 && fighter2.getHealth() !== 0) {
            if (change) {
                fighter1.attack(fighter2);
                change = false;
            } else {
                fighter2.attack(fighter1);
                change = true;
            }
        }
        if (fighter1.getHealth() > 0) {
            fighter1.addWin();
            fighter2.addLoss();
        } else {
            fighter2.addWin();
            fighter1.addLoss();
        }
    }
}

