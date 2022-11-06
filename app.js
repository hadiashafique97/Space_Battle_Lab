
let isGameOver = false

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
        checkGame()
        if (isGameOver == false) {
            if (this.hull > 0) {
                console.log(`I ${this.name} have ${this.hull} life left`)
                if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
                    evilAlien.hull -= this.firepower
                    console.log(`You hit the ${evilAlien.name} and they have ${evilAlien.hull} life left`)
                }
            } else {
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
    death() {
        alienShipGenerator.enemyShipCollection.shift()
        // myGameRound.checkStatus()
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
//variables for modal 
const modal = document.querySelector(".modal")
const trigger = document.querySelector(".trigger")
const closeButton = document.querySelector(".close-button")
const modalPlay = document.querySelector(".modal-play")
const modalRetreat = document.querySelector(".modal-retreat")
//#region instantiating a class 
let alienShipGenerator = new EvilShipFactory()
alienShipGenerator.makeAlienShip('Evil Ship 1')
alienShipGenerator.makeAlienShip('Evil Ship 2')
alienShipGenerator.makeAlienShip('Evil Ship 3')
alienShipGenerator.makeAlienShip('Evil Ship 4')
alienShipGenerator.makeAlienShip('Evil Ship 5')
alienShipGenerator.makeAlienShip('Evil Ship 6')

let MyShip = new HumanShip('USS HERO SHIP')



console.log(alienShipGenerator.enemyShipCollection)

//#endregion

//#region checkgame function
function checkGame() {
    if (alienShipGenerator.enemyShipCollection.length <= 0) {
        isGameOver = true
        console.log("This Game is now over")
    }
}
//#endregion 

//#region my  gameround object modal methods and calling my attack once 

let myGameRound = {

    toggleModal() {
        modal.classList.add("show-modal");
    },
    closeModal() {
        modal.classList.remove("show-modal")
    },
    promptMyModal(event) {
        if (event.target === alienShipGenerator.enemyShipCollection[0]) {
            toggleModal()
        }
    },
    continueToPlay() {
        modal.classList.remove("show-modal")
        doBattle() // need this to work 
    },
    endThisGame() {
        console.log(`THE GAME IS NOW OVER`) // this is working
    },
    playAgain() {
        alert(' To Play again reload the browser')
        
    },
    checkStatus(){
        let alien = alienShipGenerator.enemyShipCollection[0]
        for(let i = 0; i <= alienShipGenerator.enemyShipCollection.length; i++){
       if(alien.hull -= MyShip.firepower) {
        console.log(`${alien.name} went kabloo-ey`)
       }else {
        if(MyShip.hull === 0 ){
            console.log(`${MyShip.name} went kabloo-ey`)
        }else{
            MyShip.attack()
        }
       }
       return
    }
    }
}


trigger.addEventListener("click", myGameRound.toggleModal)
closeButton.addEventListener("click", myGameRound.closeModal)
window.addEventListener("load", myGameRound.promptMyModal)
modalPlay.addEventListener("click", myGameRound.continueToPlay)
modalRetreat.addEventListener("click", myGameRound.endThisGame)


alienShipGenerator.enemyShipCollection[0].hull = 10

alienShipGenerator.enemyShipCollection[0].evilAttack(MyShip)

// #endregion 

//#region do battle function 
function doBattle() {
    let alien = alienShipGenerator.enemyShipCollection[0]
    while (true) {
        console.log(alien)
        console.log(alienShipGenerator.enemyShipCollection)
        MyShip.attack(alien)
        if (alien.hull > 0) {
            alien.evilAttack(MyShip)
            
        } else {
            myGameRound.checkStatus()
            console.log(`${alien.name} is dead and game round is over`)
            alien.death()
           
            if (alienShipGenerator.enemyShipCollection.length > 0) {
                setTimeout(() => {
                    myGameRound.toggleModal()
                }, 600)
            } else {
                checkWinner()
                myGameRound.endThisGame()
                myGameRound.playAgain()
            }
            return

        }

    }
}
//#endregion

//#region checkwinner function 
function checkWinner() {
    let alienPlayer = alienShipGenerator.enemyShipCollection[0]
    let myLife = MyShip.hull
    if (alienShipGenerator.enemyShipCollection.length === 0 && myLife > 0) {
        console.log(`${MyShip.name} YOU WON!!!!`)
    } else {
        if (myLife === 0 && alienShipGenerator.enemyShipCollection.length > 0)
            console.log(`${alienPlayer.name} WON, BETTER LUCK NEXT TIME`)
    }
    return
}
//#endregion


doBattle()

