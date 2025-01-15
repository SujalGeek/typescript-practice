// type Mystring = string
function createUser(user) {
  return {
    name: "sujal",
    email: "",
    isActive: true,
  };
}
createUser({
  name: "sujal",
  email: "",
  isActive: true,
});
function toAccessco(pt) {
  return pt.x + pt.y;
}
toAccessco({
  x: 5,
  y: 6,
});
var myUser = {
  _id: "2345",
  name: "suj",
  email: "abc@gmail.com",
  isActive: false,
};
myUser.email = "abc4@gmail.com";
// Can not able to change the id because it is readonly that's why
// myUser._id = "abc"
