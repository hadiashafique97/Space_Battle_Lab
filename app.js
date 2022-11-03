//#region Classes
class EvilShipFactory {
    constructor() {
        this.enemyShipCreator = []
    }
    makeAlienShip(name) {
        const newAlienShip = new AlienShip(name)
        this.enemyShipCreator.push(newAlienShip)
    }
    printAlienShips() {
        for (let AlienShip of this.enemyShipCreator) {
          console.log(AlienShip);
        }
}
}

class HumanShip {
    constructor(name) {
        this.hull = 20
        this.firepower = 5
        this.accuracy = .7
        this.name = name
    }

}
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



let AlienShipGenerator = new EvilShipFactory()
AlienShipGenerator.makeAlienShip('Ship1')
AlienShipGenerator.makeAlienShip('Ship2')
AlienShipGenerator.makeAlienShip('Ship3')
AlienShipGenerator.makeAlienShip('Ship4')
AlienShipGenerator.makeAlienShip('Ship5')
AlienShipGenerator.makeAlienShip('Ship6')
console.log(AlienShipGenerator)


let MyShip = new HumanShip('Hadia\'s Ship')

console.log(MyShip)



// let USSHelloWorld = new HumanShip
// let CreateShipFactory = new ShipFactory

//#endregion