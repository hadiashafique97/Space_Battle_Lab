
// let MyShip = new HumanShip('USS Generator')
// let alienShipGenerator = new EvilShipFactory()
//#region FactoryClass
class EvilShipFactory {
    constructor() {
        this.enemyShipCollection = []
    }
    makeAlienShip(name) {
        const newAlienShip = new AlienShip(name)
        this.enemyShipCollection.push(newAlienShip)
    }
    printAlienShips() {
        for (let AlienShip of this.enemyShipCollection) {
            console.log(AlienShip);
        }
    }
}


//#endregion
//#region ClassHuman
class HumanShip {
    constructor(name) {
        this.hull = 20
        this.firepower = 5
        this.accuracy = .7
        this.name = name
    }
    attack(evilAlien) {
        if (this.hull > 0) {
            console.log(`I ${this.name} have ${this.hull} life left`)
            if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
                evilAlien.hull -= this.firepower
                console.log(`You hit the ${evilAlien.name} and they have ${evilAlien.hull} life left`)
            }
            if (evilAlien.hull <= 0) {
                console.log(`Congrats! ${this.name} you have accomplished your goal in killing ${evilAlien.name}`)
                alienShipGenerator.enemyShipCollection.shift()
            }
        } else {
            console.log('Sorry!... you missed')
        }
    }
}

//#endregion


//#region ClassAlien
class AlienShip {
    constructor(name) {
        this.hull = this.randomHull(3, 6)
        this.firepower = this.randomFirepower(2, 4)
        this.accuracy = this.randomAccuracy()
        this.name = name
    }

    randomHull(min, max) {
        return Math.floor(Math.random() * (max - min) + min)

    }
    randomFirepower(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    randomAccuracy() {
        return (Math.floor(Math.random() * 3) + 6) / 10
    }
}

//#endregion

//#region ShipGen
let alienShipGenerator = new EvilShipFactory()
alienShipGenerator.makeAlienShip('Ship1')
alienShipGenerator.makeAlienShip('Ship2')
alienShipGenerator.makeAlienShip('Ship3')
alienShipGenerator.makeAlienShip('Ship4')
alienShipGenerator.makeAlienShip('Ship5')
alienShipGenerator.makeAlienShip('Ship6')
// console.log(alienShipGenerator)


let MyShip = new HumanShip('USS Generator')

// console.log(MyShip)
//#endregion


console.log(alienShipGenerator.enemyShipCollection)
MyShip.attack(alienShipGenerator.enemyShipCollection[0])
console.log(alienShipGenerator.enemyShipCollection)
// alienShipGenerator.enemyShipCollection.shift()

// function Battlefunction() {
//     // You attack the first alien ship
//     MyShip.attack(alienShipGenerator.enemyShipCollection[0])
//     // If the ship survives, it attacks you
//     if (alienShipGenerator.enemyShipCollection[0].hull > 0) {
//         alienShipGenerator.enemyShipCollection[0].attack(MyShip)
//     }
//     // If you survive, you attack the ship again
//     if (MyShip.hull > 0) {
//         MyShip.attack(alienShipGenerator.enemyShipCollection[0])
//     }
//     // If it survives, it attacks you again … etc
//     if (alienShipGenerator.enemyShipCollection[0].hull > 0) {
//         alienShipGenerator.enemyShipCollection[0].attack(MyShip)
//     }
//     // If you destroy the ship, you have the option to attack the next ship or to retreat
//     if(alienShipGenerator.enemyShipCollection[0].hull <= 0 ){
//         console.log('you win')
//     }
//     // If you retreat, the game is over, perhaps leaving the game open for further developments or options
//     // You win the game if you destroy all of the aliens
//     // You lose the game if you are destroyed

// }
