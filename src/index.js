'use strict';

require("./styles.scss");

const {Elm} = require('./PhotoGroove.elm');
var root = document.getElementById("app");
var app = Elm.PhotoGroove.init({node: root});

app.ports.toJs.subscribe(data => {
    console.log(data);
})
// Use ES2015 syntax and let Babel compile it for you
var testFn = (inp) => {
    let a = inp + 1;
    return a;
}
