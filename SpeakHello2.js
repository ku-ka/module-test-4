function speak() {
  alert ("Check the work in the active window!")
  let name = prompt ("Enter a name from the list", "")

switch (name){
  case "John":
  case "Jen":
  case "Jason":
  alert ("Good bye " +name);
  break;
  
  case "Paul":
  case "Frank":
  case "Larry":
  case "Paula":
  case "Laura":
  alert ("Hello " +name);
  break;
  
  case "Jim":
  alert ("Good bye " +name);
  break;


  default:
  alert (name + " Wrong Name");
     
}

}
  


speak();
  