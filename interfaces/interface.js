var sujal55 = { githubToken: "github", dbId: 1, userId: 1, email: 'ab@c.com', startTrial: function () { return 'Trial Started'; }, startTrial2: function () { return 'Trial Started'; },
    role: 'admin',
    getCoupon: function (name, off) {
        return 10;
    }
};
// sujal55.dbId = 2; // Error: Cannot assign to 'dbId' because it is a read-only property.
