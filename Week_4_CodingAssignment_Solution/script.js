var names = new Array();
names[0] = "Aaditya";
names[1] = "Jay";
names[2] = "Joker";
names[3] = "jay";
names[4] = "Rohan";
names[5] = "ajay";
names[6] = "john";
names[7] = "Roopak";
names[8] = "parth";
names[9] = "jimmy";

for (var i = 0; i < names.length; i++) {
  if (names[i].charAt(0) === "J" || names[i].charAt(0) === "j") {
    console.log("Goodbye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}
