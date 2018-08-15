console.log('Write your code here!')
console.log('customers and moment are available to you.')

class Customer {
    constructor (name, email, location, dob, registered) {
        this.name = name; 
        this.email = email;
        this.location = location;
        this.dob = dob;
        this.registered = registered;
    }
    getName = () => {
        return name[1][2]
    }
    getLocation = ()=> {
        return location
    }
    getBirthdate = () => {
        return moment(dob).format('MMM Do, YYYY')
    }
    getRegDate = () => {
        return moment(registered).format('MMM Do, YYYY')
    }
}

