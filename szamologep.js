window.addEventListener("load", init);

function init() {
    
    const buttonGombok = document.querySelectorAll("button");
   
    buttonGombok[0].addEventListener("click", 
    function () {
      console.log(this)
    }
    )
    
    buttonGombok[1].addEventListener("click", 
    function () {
        console.log(this)
    }
    )
     
    buttonGombok[2].addEventListener("click", 
    function () {
     
      console.log(this)}
     )
    buttonGombok[3].addEventListener("click", 
    function () {
        console.log(this)
    }
    )
    buttonGombok[4].addEventListener("click", 
    function () {
        console.log(this)}    
    )
    
    buttonGombok[5].addEventListener("click", 
    function () {
        console.log(this)
    }
    )
    buttonGombok[6].addEventListener("click", 
    function () {
        console.log(this)
    }
    )
    buttonGombok[7].addEventListener("click", 
    function () {
        console.log(this)
    } 
    )
    buttonGombok[8].addEventListener("click", 
    function () {
        console.log(this)
    }  
    )
    buttonGombok[9].addEventListener("click", 
    function () {
        console.log(this)
    }
    )
    buttonGombok[10].addEventListener("click", 
    function () {
        console.log(this)
    }
    )
    buttonGombok[11].addEventListener("click", 
    function () {
        console.log(this)
    }
    )
    buttonGombok[12].addEventListener("click", 
    function () {
        console.log(this)
    }
    )
    buttonGombok[13].addEventListener("click", 
    function () {
        console.log(this)
    }
    )  
    buttonGombok[14].addEventListener("click", 
    function () {
        console.log(this) 
    }
    )
    buttonGombok[15].addEventListener("click", 
    function () {
        console.log(this) 
    }
    )
    buttonGombok[16].addEventListener("click", 
    function () {
        console.log(this) 
    }
    )
    buttonGombok[17].addEventListener("click", 
    function () {
        console.log(this) 
    }
    )
    buttonGombok[18].addEventListener("click", 
    function () {
        console.log(this) 
    }
    )
    buttonGombok[19].addEventListener("click", 
    function () {
        console.log(this) 
    }
    )
}
//listába gyüjtjük a számokat összefüzzük és müveletet végzünk velük
const tomb = [0, 1, 2, 3, 4, 5, 6];
function tombatir(belsotomb) {
  belsotomb = [22];
  belsotomb[6] = 15;
  tomb[2] = 23;
  /*  tomb=[9,7]; */
  tomb[7] = 6;
  tomb.push(14);
  console.log(tomb);
  console.log(belsotomb);
  for (var index = 0; index < belsotomb.length; index++) {
    console.log(belsotomb[index]);
  }
}
tombatir(tomb);
console.log(tomb);

/*     buttonGombok[1].addEventListener("click", 
     () =>{
      console.log("szam2");
    }
      ) */
    
