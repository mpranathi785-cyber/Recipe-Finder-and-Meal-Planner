var recipes = {
    rice:"Vegetable Fried Rice",
    potato:"Potato Curry",
    egg:"Egg Curry",
    tomato:"Tomato Soup",
    chicken:"Chicken Curry"
};

function findRecipe(){

    var ingredient=document.getElementById("ingredient").value.toLowerCase();

    if(recipes[ingredient]){
        document.getElementById("result").innerHTML="Recipe: "+recipes[ingredient];
    }
    else{
        document.getElementById("result").innerHTML="Recipe not found";
    }

}

function addMeal(){

    var day=document.getElementById("day").value;
    var meal=document.getElementById("meal").value;

    var li=document.createElement("li");

    li.innerHTML=day+" : "+meal;

    document.getElementById("mealList").appendChild(li);

}

function addFavorite(){

    var recipe=document.getElementById("result").innerHTML;

    if(recipe!=""){
        var li=document.createElement("li");
        li.innerHTML=recipe;
        document.getElementById("favoriteList").appendChild(li);
    }

}

function generateShopping(){

    var items=["Rice","Tomato","Potato","Oil","Salt"];

    var list=document.getElementById("shoppingList");

    list.innerHTML="";

    for(var i=0;i<items.length;i++){

        var li=document.createElement("li");

        li.innerHTML=items[i];

        list.appendChild(li);

    }

}