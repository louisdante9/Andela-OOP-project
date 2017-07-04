"use strict";
describe("the class for employees", function() {
  it("can create a class", function() {
    var s_name = Symbol();
    var Person = function Person(name) {
      $traceurRuntime.setProperty(this, s_name, name);
    };
    ($traceurRuntime.createClass)(Person, {
      get name() {
        return this[$traceurRuntime.toProperty(s_name)];
      },
      set name(newValue) {
        if (newValue) {
          $traceurRuntime.setProperty(this, s_name, newValue);
        }
      }
    }, {});
    var Employee = function Employee(title, name) {
      $traceurRuntime.superCall(this, $Employee.prototype, "constructor", [name]);
      this._title = title;
    };
    var $Employee = Employee;
    ($traceurRuntime.createClass)(Employee, {
      get title() {
        return this.title;
      },
      doWork: function() {
        return (this.name + " is working");
      }
    }, {}, Person);
    var p = new Person('louis');
    p.name;
  });
});

//# sourceMappingURL=mySpec.js.map
