const modal = document.querySelector(".modal");

const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
// const modalPlay = document.querySelector(".modal-play")// add event listeners 
// modalPlay.addEventListener('click',  MyShip.attack())
// const modalRetreat = document.querySelector(".modal-retreat")
// modalRetreat.addEventListener('click', "Game Over")

// function continueGame(){
//     if (alienShipGenerator.enemyShipCollection[0].length -1 ){
//         modal.yesNoDialog(modalPlay).then(() => /*do something if Yes*/).catch(() => /*do something if Not*/);

//     }
// }


// function retreatGame(){

// }

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

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


