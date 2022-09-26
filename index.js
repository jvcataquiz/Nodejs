const superheroes = require('superheroes');
const supervillains = require('supervillains');
const villains = supervillains.random();
const heroes = superheroes.random();

//hp
var heroeshp = Math.floor(Math.random() * 100);
var villainshp = Math.floor(Math.random() * 100);
//attack

let heroeattack;
let villainattack;
var heroturn;
var villainturn;



   var heroesinterval = setInterval(function () {
        heroeattack = Math.floor(Math.random() * 10);
        villainattack = Math.floor(Math.random() * 10);


        console.log("\n\n" + heroes + " Hero Turn's");
        heroturn = villainshp - heroeattack; 
        console.log(heroes + "'s attack : " +  villainshp+  " - " +  heroeattack )
        villainshp = heroturn
        console.log(villains + "'s Hp:" + villainshp +"\n");


        console.log(villains + " Villain Turn's");
        villianturn = heroeshp - villainattack; 
        console.log(villains + "'s attack : " +  heroeshp+  " - " +  villainattack )
        heroeshp = villianturn
        console.log(heroes + "'s Hp:" +   heroeshp +"\n");
       

       if(villainshp <=  0 ||   heroeshp <= 0 ){
            clearInterval(heroesinterval);
            if(villainshp < heroeshp ){

                console.log(heroes + " Hero wins!!!  Hp remains: " + heroeshp);



            }else{
                console.log(villains + " Villain wins!!! Hp Remains: " + villainshp);
            }
        }
        
       



    }, 2000);




;