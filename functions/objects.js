"use strict";
exports.__esModule = true;
var user = {
    name: "Anas",
    email: "anas@gmail,com",
    isPaid: true
};
function createUser(param) {
    return { name: param.name, isPaid: param.isPaid };
}
;
console.log(createUser({ name: "anas", isPaid: true }));
var createCourse = function (user) {
    return {};
};
createCourse({ name: "", email: "", isPaid: false });
