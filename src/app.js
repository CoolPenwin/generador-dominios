/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#nuevoDom").addEventListener("click", () => {
    document.querySelector("#Dominio").innerHTML = DomainGenerator();
  });
  document.querySelector("#Dominio").innerHTML = DomainGenerator();
  console.log("wtf");
  
  // Definimos la variable global
  var todos= false;
  
  console.log("todos");
  console.log(todos);
  
  // let checkbox = document.getElementById("orden");
  
  // checkbox.addEventListener("change", function() {
//   todos = true;
// });

  
  
function DomainGenerator () {
    let prep = ["The", "A", "Some", "My", "Your", "Our", "Their"];
    let adj = ["Cool", "squeeze", "awesome", "funny", "crazy", "silly", "wacky", "bizarre"];
    let suj = ["penwin", "octopuss", "potato", "tomato", "cow", "cat","unicorn","dinosaur","ninja","robot"];
    let dom = [".lol", ".com", ".es",".lol",".fun",".haha",".wtf"];

    let preIndex = 0;
    let adjIndex = 0;
    let sujIndex = 0;
    let domIndex = 0; 
    
    // if (todos=true) {
    //      //
    //     //  preIndex = ;
    //     //  adjIndex = ;
    //     //    sujIndex = ;
    //     //    domIndex = ;       
           
        
    //   } else {
    //            // genera de forma aleatoria 
    //        preIndex = Math.floor(Math.random() * pre.length);
    //        adjIndex = Math.floor(Math.random() * adj.length);
    //        sujIndex = Math.floor(Math.random() * suj.length);
    //        domIndex = Math.floor(Math.random() * dom.length);  
          
    //     }
        
   
    
  return {"tu nuevo dominio es:  "prep[preIndex] + adj[adjIndex] + suj[sujIndex] + dom[domIndex]
  }  
  
};
  
};