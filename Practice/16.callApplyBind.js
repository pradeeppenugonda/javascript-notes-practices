let user = {
    firstName: "Pradeep",
    lastName: "Penugonda",
    printFullName : function(){
        console.log(this.firstName + " " + this.lastName)
    }
}
user.printFullName();

let user2 = {
    firstName: "Naga Venkata Rudhra Vedhansh",
    lastName: "Penugonda",
    
}
// Function Borrowing 

// user.printFullName.call(user2)