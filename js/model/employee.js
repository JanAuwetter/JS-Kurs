// Vererbung von Daten aus der user.js mit extends und "super"

class Employee extends User{

  constructor (id, name, password, email, birthday, address, role) {
    super(id, name, password, email, birthday, address);
    this.role = role;
  }
}
