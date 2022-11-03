
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
            evilAlien.hull -= this.firepower
            console.log(`I have ${evilAlien.hull} power left`)
        } else {
            if (evilAlien.hull > 3) {
                evilAlien.firepower -= this.hull
                console.log(`I have ${this.hull} power left`)
            }
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


//#region Attackmethod instructions
//You attack the first alien ship
// If the ship survives, it attacks you
// If you survive, you attack the ship again
// If it survives, it attacks you again … etc
// If you destroy the ship, you have the option to attack the next ship or to retreat
// If you retreat, the game is over, perhaps leaving the game open for further developments or options
// You win the game if you destroy all of the aliens
// You lose the game if you are destroyed















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
MyShip.attack(alienShipGenerator.enemyShipCollection[0])
MyShip.attack(alienShipGenerator.enemyShipCollection[1])
MyShip.attack(alienShipGenerator.enemyShipCollection[2])
MyShip.attack(alienShipGenerator.enemyShipCollection[3])
MyShip.attack(alienShipGenerator.enemyShipCollection[4])
MyShip.attack(alienShipGenerator.enemyShipCollection[5])