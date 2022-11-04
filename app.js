
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

// setTimeout(function() {
//     alert(
//       console.log("Would you like to retreat or keep going?")
//     )
//   } )

//#endregion
//#region ClassHuman
class HumanShip {
    constructor(name) {
        this.hull = 20
        this.firepower = 5
        this.accuracy = .7
        this.name = name
        // this.turn = true || false
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
                if (alienShipGenerator.enemyShipCollection.length === 0) {
                    console.log('YOU ARE THE WINNER')
                } if(this.hul > 0){
                    this.setTimeout()
            }} else {
                evilAlien.firepower -= this.hull
            }
        } else {
            console.log('Sorry!... you missed')
            if (evilAlien.hull > 0) {
                evilAlien.firepower -= this.hull
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
        // this.turn = true || false 
    }
    evilAttack(heroship) {
        if (this.hull > 0) {
            console.log(`The ${this.name} has ${this.hull} life left`)

            if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
                heroship.hull -= this.firepower
                console.log(`${this.name} hit you and you have ${heroship.hull} life left`)
            } if (heroship.hull <= 0) {
                console.log('Oh no sorry, but you\'re dead')
            } else if (heroship.hull > 0) {
                heroship.attack(this)
            } else if (this.hull <= 0) {
                console.log('Great job, you\'ve won')
            }
        }
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

//#region instantiating a class 
let alienShipGenerator = new EvilShipFactory()
 alienShipGenerator.makeAlienShip('Evil Ship 1')
alienShipGenerator.makeAlienShip('Evil Ship 2')
alienShipGenerator.makeAlienShip('Evil Ship 3')
alienShipGenerator.makeAlienShip('Evil Ship 4')
alienShipGenerator.makeAlienShip('Evil Ship 5')
alienShipGenerator.makeAlienShip('Evil Ship 6')

let MyShip = new HumanShip('USS Generator')
// MyShip.attack(alienShipGenerator.enemyShipCollection[0])
alienShipGenerator.enemyShipCollection[0].hull = 10
MyShip.attack(alienShipGenerator.enemyShipCollection[0])
MyShip.attack(alienShipGenerator.enemyShipCollection[0])
MyShip.attack(alienShipGenerator.enemyShipCollection[0])
MyShip.attack(alienShipGenerator.enemyShipCollection[0])
MyShip.attack(alienShipGenerator.enemyShipCollection[0])
MyShip.attack(alienShipGenerator.enemyShipCollection[0])

alienShipGenerator.enemyShipCollection[0].evilAttack(MyShip)

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
