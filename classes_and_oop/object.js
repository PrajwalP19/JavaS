function multipliBy5(num){
    return num*5
}

multipliBy5(5)
multipliBy5.power = 2
console.log(multipliBy5(5));
console.log(multipliBy5.power);
console.log(multipliBy5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
    
}

const chai = new createUser("chai", "25")
const tea = new createUser("tea", "250")

chai.increment()
tea.increment()