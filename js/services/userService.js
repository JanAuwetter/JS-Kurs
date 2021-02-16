class UserService {

  static init(){
    var user = UserService.createUser(1, "Herbert", "xxxx", "herbert@gmx.de", "01.01.1900");
  //  UserService.displayUser(user);
    UserService.createTableHeader(user);
  }

  static createUser(id, name, password, email, birthday){
      var user = new User(id, name, password, email, birthday);
      return user;
  }

  static createTableHeader(user){
    var columnNames = Object.keys(user);
    var result ="";
    for (var i = 0; i < columnNames.length; i++) {
      var columnName = "<th>" + columnNames[i] + "</th>";
      result = result + columnName;

    }
    var columnValueArray = Object.values(user);
    var result2 ="<tr>";
    for (var i = 0; i < columnValueArray.length; i++) {
      var columnValue = "<td>" + columnValueArray[i] + "</td>";
      result2 = result2 + columnValue;

    document.getElementById("header").innerHTML = result;
    document.getElementById("content").innerHTML = result2 + "</tr>";
  }

}
}
