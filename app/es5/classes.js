"use strict";
describe("the class for employees", function() {
  it("can create a class", function() {
    var Employee = function Employee(name) {
      this._name = name;
    };
    ($traceurRuntime.createClass)(Employee, {
      doWork: function() {
        return 'complete';
      },
      get name() {
        return this._name;
      },
      set name(newValue) {
        this._name = newValue;
      }
    }, {});
    var e1 = new Employee('louis');
    var e2 = new Employee('alex');
    expect(e1.name).toBe("louis");
    expect(e2.name).toBe("alex");
    e1.name = 'chris';
    expect(e1.name).toBe("chris");
  });
});

//# sourceMappingURL=classes.js.map
