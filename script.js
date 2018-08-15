console.log('Write your code here!')
console.log('customers and moment are available to you.')

// class Customer {
//     constructor (name, email, location, dob, registered) {
//         this.name = name; 
//         this.email = email;
//         this.location = location;
//         this.dob = dob;
//         this.registered = registered;
//     }
//     getName(){
//         return name[1][2]
//     }
//     getLocation() {
//         return location
//     }
//     getBirthdate() {
//         return moment(this.customerInfo.dob).format('MMM D, YYYY')
//     }
//     getRegDate() {
//         return moment(registered).format('MMM D, YYYY')
//     }
// }

// function createNewDiv(){
//     let newDiv = document.createElement('div')
// 	let containerDiv = document.getElementById('customers')
//     containerDiv.appendChild(newDiv).classList.add('customer-div')
    
// } 

// function newCustomer() {
    
// }

function titleCase (word) {
    return word[0].toUpperCase() + word.slice(1)
  }
  
  class Customer {
    constructor (customerInfo) {
      this.info = customerInfo
    }
  
    getName () {
      return titleCase(this.info.name.first) +
        ' ' +
        titleCase(this.info.name.last)
    }

    getEmailAddress () {
        return this.info.email
    }

    getDates(){
        return 'DOB: ' + moment(this.info.dob).format('MMM D, YYYY') + '\n' + 
        'Customer since: ' + moment(this.info.registered).format('MMM D, YYYY')
    }
  
    generateDOM () {
      let div = document.createElement('div')
      div.classList.add('customer')
  
      let nameH2 = document.createElement('h2')
      nameH2.innerText = this.getName()

      let headshot = document.createElement('img')
      headshot.src = this.info.picture.large

      let email = document.createElement('p')
      email.innerText = this.getEmailAddress()

      let dates = document.createElement('p')
      dates.innerText = this.getDates()

      

      div.appendChild(nameH2)
      div.appendChild(headshot)
      div.appendChild(email)
      div.appendChild(dates)
  
      return div
    }
  }
  
  let outputDiv = document.getElementById('output')
  for (let customerInfo of customers) {
    let customer = new Customer(customerInfo)
    outputDiv.appendChild(customer.generateDOM())
  }
  