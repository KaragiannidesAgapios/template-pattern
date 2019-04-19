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

class TeamEvent {
    prepareEvent(){
        this.checkAvailabilities();
        this.bookDate();
        this.notifyParticipants();
        this.bookVenue();
        this.arrangeTransportation();
    }

    checkAvailabilities(){
        console.log('Checking dates')
    }

    bookDate(){
        console.log('Booking date');
    }

    notifyParticipants(){
        console.log('Notifying participants');
    }

    bookVenue() {
        throw new Error('You have to implement the method bookVenue!');
    }

    arrangeTransportation() {
        throw new Error('You have to implement the method arrangeTransportation!');
    }
}

class LaserTagEvent extends TeamEvent {
    bookDate(){
        console.log('Booking date for Laser Tag');
    }

    notifyParticipants(){
        console.log('Notifying participants for Laser Tag');
    }

    bookVenue() {
        console.log('Booking laser tag place');
    }

    arrangeTransportation() {
        console.log('Take metro');
    }
}

class SarlatEvent extends TeamEvent {
    bookDate(){
        console.log('Booking date for Sarlat');
    }

    notifyParticipants(){
        console.log('Notifying participants for Sarlat');
    }

    bookVenue() {
        return;
    }

    arrangeTransportation() {
        console.log('Driving');
    }
}

const event = new LaserTagEvent();
event.prepareEvent();
