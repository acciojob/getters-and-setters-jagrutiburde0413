//complete this code
class Person {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}
	get  name(){
		return this._name
	}
	set age(age){
		return this._age=age
	}
}

class Student extends Person {
	 study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
	 teach() {
    console.log(`${this._name} is teaching`);
  }
}
let person1=new person("John", 26)
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
