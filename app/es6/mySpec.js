//abstraction for an employee app
describe("the class for employees", ()=>{

	it("can create a class", ()=> {
		let s_name = Symbol();
	class Person{
			constructor(name){
				this[s_name] = name;
			}
			get name(){
				return this[s_name];
			}
			set name(newValue){
				if(newValue){
					this[s_name] = newValue;
				}
			}
		}
		class Employee extends Person{
			// super(name);
			constructor(title, name){
			  super(name);
			  this._title = title;
			}
			get title(){
			  return this.title;
			}
			doWork(){
					return `${this.name} is working`;
			}
		}

		let p = new Person('louis');
		p.name;


	 });

});
