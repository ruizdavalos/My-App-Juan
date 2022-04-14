//1)Tener la variable react en scope
import React from "react";

//2) Tener la variable reactDom en el scope
import ReactDOM from "react-dom";

//3) Tener la variable App () la variable que contiene todo el codigo de la aplicacion en scope
 function App() {
     return "Hola Mundo"
 }

//4)Hacer render de la App en el DOM

ReactDOM.render(App(), document.getElementById("root"))