class Address{
  constructor(street, postCode, city) {
    this.street = street;
    this.postCode = postCode;
    this.city = city;
  }



// auf werte lesend zugreifen

//werte setzen

// status des Object zurückgeben

  showAddress(){
    return this.street + " " + this.postCode + " " + this.city;
  }
}
