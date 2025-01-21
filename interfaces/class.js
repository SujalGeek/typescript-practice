var User344 = /** @class */ (function () {
    function User344(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
        // allow because in the class we can access the private property
        // this.city = "Delhi";
    }
    return User344;
}());
var sujal346 = new User344("h@h.com", 'Sujal');
// sujal346.city = "Mumbai";
// error because city is readonly and private
// sujal346.city
