console.log('Write your code here!')
console.log('customers and moment are available to you.')

function titleCase (word) {
    return word[0].toUpperCase() + word.slice(1)
  }

  function capsEachWord (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};

  function capsEachWord (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};
  
  class Customer {
    constructor (customerInfo) {
      this.info = customerInfo
    }
  
    getName () {
      return capsEachWord(this.info.name.first) +
        ' ' +
        capsEachWord(this.info.name.last)
    }

    getEmailAddress () {
        return this.info.email
    }

    getDates(){
        return 'DOB: ' + moment(this.info.dob).format('MMM D, YYYY') + '\n' + 
        'Customer since: ' + moment(this.info.registered).format('MMM D, YYYY')
    }

    getLocation() {
        return capsEachWord(this.info.location.street) + '\n' + capsEachWord(this.info.location.city) + ', ' + capsEachWord(this.info.location.state) + ' ' 
        + (this.info.location.postcode)
    }

    getState() {
       
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

      let address = document.createElement('p')
      address.innerText = this.getLocation()

      let test = document.createElement('p')
      test.innerText = this.getState()

      div.appendChild(headshot)
      div.appendChild(nameH2)
      div.appendChild(email)
      div.appendChild(address)
      div.appendChild(dates)
  
      return div
    }
  }
  
  let outputDiv = document.getElementById('output')
  for (let customerInfo of customers) {
    let customer = new Customer(customerInfo)
    outputDiv.appendChild(customer.generateDOM())
  }

// function abbr(state) { 
//     let stateName = Object.keys(states);
//     let stateAbbr = Object.values(states);

//     if(this.info.location.state === stateName ) {
//         return stateAbbr
//     }
// }


