var score = 45;
score = '45';
// or
score = 55;
var sujal = {
    name: "sujal",
    id: 1
};
// either way but if remove id from admin then it will give error
sujal = {
    username: "sujal3",
    id: 2
};
function getDBid(id) {
    // some Api calls
    console.log("Db id is :".concat(id));
}
function getdbid1(id) {
    // since it can be having error because it can be string so we can use type assertion
    // id.toLowerCase();
    if (typeof id === "string") {
        id.toLowerCase();
    }
    if (typeof id === "number") {
        id = id + 2;
        id.toFixed();
    }
}
// array
var data = [1, 2, 3, 4, 5];
var data1 = [1, 2, 3, 4, 5, 'sujal'];
// strict 
var pi = 3.14;
// pi = 3.15; // error
