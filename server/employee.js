class Employee{
  constructor(Id,firstName,lastName,email,password,dateTime){
      this.Id = Id; 
      this.firstName = firstName; 
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.dateTime = dateTime; 
  }
}

module.exports = Employee;
