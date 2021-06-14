class Walk {
    constructor(location, distance) {
        this.location = location
        this.distance = distance
    }

    toString() {
        return `I walked ${this.distance}km in ${this.location}`
    }
}

class Dog {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.walks = []
    }

    speak() {
        console.log(`Woof! My name is ${this.name}`)
    }

    walk(location, distance) {
        this.walks.push(new Walk(location, distance))
    }

    display_walks() {
        for (let walk of this.walks) {
            console.log("" + walk)
        }
    }

    total_distance() {
        return this.walks.reduce((total, walk) => total + walk.distance, 0)
    }
}

let dog1 = new Dog("Ted", "Brisbane")
dog1.walk("Bribie Island", 3)
dog1.walk("Redcliffe", 5)
console.log(dog1)
dog1.display_walks()
console.log(dog1.total_distance())
