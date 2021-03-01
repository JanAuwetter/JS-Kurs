class UserService {

  static init(){

  //  console.log(document);
    var user = UserService.createUser(1, "Herbert", "xx55xx", "herbert@gmx.de", "01.01.1900");
    var user2 = UserService.createUser(2, "Franz", "xxdsdxx", "franz@gmx.de", "01.01.19345");
    var user3 = UserService.createUser(3, "Klaus", "xxdsfx", "Klaus@gmx.de", "01.01.1930");
    var user4 = UserService.createUser(4, "Hugo", "xxggxx", "Hugo@gmx.de", "01.01.1922");

    var address1 = new Address("Doberaner Platz","18057","Rostock");


    user.address = address1;

    var userList = new UserList();
    userList.addUser(user);
    userList.addUser(user2);
    userList.addUser(user3);
    userList.addUser(user4);

  //  console.log(userList.users);

    UserService.showUsers(userList.users);
//    console.log(userList);

  }

  static createUser(id, name, password, email, birthday){
      var user = new User(id, name, password, email, birthday);
      return user;
  }

  static showUsers(userList){
    var result = [];
    var resultContent ="";
    for (var i = 0; i < userList.length; i++) {
      resultContent = resultContent + "<tr>"
      let user = userList[i];
      result =  UserService.createTableHeaderAndContent(user);
      resultContent = resultContent + result[1] + "</tr>";
    }
      document.getElementById("header").innerHTML = result[0];
      document.getElementById("content").innerHTML = resultContent;
  }

  static createTableHeaderAndContent(user){
    var columnNames = Object.keys(user);
    var columnValueArray = Object.values(user);

    var resultHeader ="";
    var resultContent ="<tr>";

    for (var i = 0; i < columnNames.length; i++) {
      var wrongColumnName = columnNames[i];
      var correctColumnName = wrongColumnName.substring(0,1).toUpperCase()+wrongColumnName.substring(1);

      var columnName = "<th>" + correctColumnName + "</th>";
      resultHeader = resultHeader + columnName;

      var columnValue = UserService.generateTdLine(columnValueArray[i]);

      resultContent = resultContent + columnValue;
    }

    return [resultHeader, resultContent]

  }
  static generateTdLine(value){
    var columnValue ="";
    if (value instanceof Address){
      columnValue = "<td>" + value.postCode + "</td>";
    }
    else {
      if(value === undefined){
          columnValue = "<td>Keine Adresse angegeben!</td>";
      }
      else{
          columnValue = "<td>" + value + "</td>";
      }
    }

    return columnValue;
  }


   static changePassword(oldPassword, newPassword, repeatedNewPassword){
     return "passwordChanged";
   }
 }
