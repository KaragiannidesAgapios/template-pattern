/*
    REFERENCES
    JS
    https://medium.com/@nanofaroque/template-method-design-pattern-in-javascript-286384155823
    https://github.com/sohamkamani/javascript-design-patterns-for-humans#-template-method
    https://medium.com/@yuribett/javascript-abstract-method-with-es6-5dbea4b00027

    JAVA INTERFACES
    https://www.geeksforgeeks.org/interfaces-in-java/
    https://www.javatpoint.com/interface-in-java
*/

/*
    REFERENCES
    JS
    https://medium.com/@nanofaroque/template-method-design-pattern-in-javascript-286384155823
    https://github.com/sohamkamani/javascript-design-patterns-for-humans#-template-method
    https://medium.com/@yuribett/javascript-abstract-method-with-es6-5dbea4b00027

    JAVA INTERFACES
    https://www.geeksforgeeks.org/interfaces-in-java/
    https://www.javatpoint.com/interface-in-java
*/

class Burger {
    makeBurger(){
        this.sliceBun();
        this.grillBurger();
        this.putCheece();
        this.putSauce();
        this.putVeggies();
    }

    sliceBun(){
        console.log('Slice the bun');
    }

    grillBurger(){
        console.log('Grill the burger');
    }

    putCheece(){
        console.log('Putting some cheese');
    }

    putSauce(){
        throw new Error('You have to implement the method putSauce!');
    }

    putVeggies() {
        throw new Error('You have to implement the method putVeggies!');
    }
}

class VeganBurger extends Burger {
    grillBurger(){
        console.log('Grill the vegan burger');
    }

    putCheece(){
        console.log('Putting some vegan cheese');
    }

    putSauce() {
        console.log('Putting some vegan mayo');
    }

    putVeggies() {
        console.log('Put some tofu and mushrooms');
    }
}

class DoubleBurger extends Burger {
    grillBurger(){
        console.log('Grill two burgers');
    }

    putSauce() {
        console.log('Put some bbq sauce');
    }

    putVeggies() {
        console.log('Put some letuce and tomato');
    }
}

const event = new LaserTagEvent();
event.prepareEvent();
