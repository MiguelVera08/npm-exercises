const $ = require('jquery');

// let sayHello = () => {
// //     console.log('Hello');
// // };
// //
// // sayHello();

$(document).ready(function () {
    $('#message').html("Hello")
});

import {sayHello} from "./say-hello";

sayHello('Miguel');