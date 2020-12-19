function cakes(recipe, available) {
    
    return Math.floor(available.flour/recipe.flour);
}
console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }))// must return 0
console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }))// must return 2
console.log(cakes({cream:200,flour:300,sugar:150,milk:100,oil:100} , {sugar:1700,flour:20000,milk:20000,oil:30000,cream:5000}))// must return 2
; 