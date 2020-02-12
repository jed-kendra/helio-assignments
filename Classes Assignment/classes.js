class Animal {
    constructor() {

    }

    speak (){
        console.log(this.sound)
    }

    sayName () {
        console.log (this.name)
    }
}

class Dog extends Animal {

    constructor (name, sound) {
        super(Animal)
        this._name = name
        this.sound = sound
    }

    get name() {
        return this._name
    }

    set name(newValue) {
        this._name = newValue
    }

}

let newDog = new Dog("Westie", "Bark")
console.log(newDog)
myDog.speak()
myDog.name = "Max"
myDog.sayName()

//classes assignment

    




