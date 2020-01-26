const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Meal = require('../../models/Meal');
const Child = require('../../models/Child');
const passport = require('passport');

router.get("/seed", async (req, res)=>{

    const password_digest = "$2a$10$jjDnk0HSqgl2fEUsYdnnbOv7EqWVH.UJQoOYdWU9xmN.Cu.JGa/1y";

    const users = await Promise.all([
        {
            handle: "userA", 
            email: "userA@google.com",
            password: password_digest,
            firstName: "usera",
            lastName: "a"
        },
        {
            handle: "demo-user",
            email: "demoUser@demo.com",
            password: password_digest,
            firstName: "demo",
            lastName: "user" 
        }
    ].map(u => new User(u).save()));

    const childs = await Promise.all([
        {
         user: users[0].id,
         name: "Francis",
         age: 3,
         category: ["Chinese", "American"],
         ingredient: ["Rice", "Bacon", "Salami"]
        }
    ].map(c => new Child(c).save()));

    const meals = await Promise.all([
        {
            title: "Sesame Chicken",
            category: "Chinese",
            ingredients: [
                "5 ounce skinless, boneless chicken breast halves", 
                "1 clove garlic"
            ],
            photoUrl: "https://www.ndtv.com/cooks/images/sesame.chik.20.000%281%29.jpg",
            cookingInstruction: [
                "Combine the 2 tablespoons soy sauce, the dry sherry, dash of sesame oil, flour, 2 tablespoons cornstarch, 2 tablespoons water, baking powder, baking soda, and canola oil in a large bowl.Mix well; stir in the chicken.Cover and refrigerate for 20 minutes.", 
                "Heat oil in a deep- fryer or large saucepan to 375 degrees F(190 degrees C).", 
                "Combine the 1/2 cup water, chicken broth, vinegar, 1/4 cup cornstarch, sugar, 2 tablespoons soy sauce, 2 tablespoons sesame oil, red chili paste, and garlic in a small saucepan.Bring to a boil, stirring constantly.Turn heat to low and keep warm, stirring occasionally.", 
                "Fry the marinated chicken in batches until cooked through and golden brown, 3 to 5 minutes.Drain on paper towels.", 
                "Transfer the chicken to a large platter, top with sauce, and sprinkle with sesame seeds."
            ],
            nutritionFacts: "Per Serving: 745 calories; 37.1 g total fat; 88 mg cholesterol; 1405 mg sodium. 68.6 g carbohydrates; 34.3 g protein."
        },
        {
            title: "Bibimbap",
            category: "Korean",
            ingredients: [
                "1 English cucumber", 
                "1 bunch fresh spinach", 
                "2 carrots", 
                "1 clove garlic", 
                "1 pinch red pepper",
                "1 pound thinly-sliced beef top round steak",
                "4 large eggs" 
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/720x405/3961066.jpg",
            cookingInstruction: [
                "Stir cucumber pieces with 1/4 cup gochujang paste in a bowl; set aside.",
                "Bring about 2 cups of water to a boil in a large nonstick skillet and stir in spinach; cook until spinach is bright green and wilted, 2 to 3 minutes. Drain spinach and squeeze out as much moisture as possible; set spinach aside in a bowl and stir soy sauce into spinach.",
                "Heat 1 teaspoon olive oil in large nonstick skillet and cook and stir carrots until softened, about 3 minutes; stir in garlic and cook just until fragrant, about 1 more minute. Stir in cucumber pieces with gochujang paste; sprinkle with red pepper flakes, and set the mixture aside in a bowl.",
                "Brown beef in a clean nonstick skillet over medium heat, about 5 minutes per side, and set aside. In a separate nonstick skillet, heat 1 more teaspoon olive oil over medium-low heat and fry the eggs just on one side until yolks are runny but whites are firm, 2 to 4 minutes each.",
                "To assemble the dish, divide cooked rice into 4 large serving bowls; top with spinach mixture, a few pieces of beef, and cucumber mixture. Place 1 egg atop each serving. Drizzle each bowl with 1 teaspoon of sesame oil, a sprinkle of sesame seeds, and a small amount of gochujang paste if desired."
            ],
            nutritionFacts: "Per Serving: 569 calories; 19.3 g fat; 63 g carbohydrates; 34.9 g protein; 243 mg cholesterol; 574 mg sodium."
        },
        {
            title: "Chile Garlic BBQ Salmon",
            category: "Chinese",
            ingredients: [
                "3 pounds whole salmon", 
                "1 clove garlic", 
                "3 green onions", 
                "2 limes"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/720x405/5536279.jpg",
            cookingInstruction: [
                "Prepare outdoor grill for high heat.",
                "Trim the tail and fins off of the salmon. Make several shallow cuts across the salmon's skin. Place salmon on 3 large, slightly overlapping sheets of aluminum foil.",
                "In a bowl, stir together soy sauce, chile sauce, ginger, and garlic. Mix in lime juice, lime zest, and brown sugar. Spoon sauce over the salmon.",
                "Fold the foil over the salmon, and crimp the edges to seal.",
                "If using hot coals, move them to one side of the grill. Place the fish on the side of the grill that does not have coals directly underneath it, and close the lid. If using a gas grill, place the fish on one side, and turn off the flames directly underneath it; close the lid. Cook for 25 to 30 minutes. Remove to a serving platter, and pour any juices that may have collected in the foil over the top of the fish. Sprinkle with green onions."
            ],
            nutritionFacts: "Per Serving: 438 calories; 24.7 g fat; 5.3 g carbohydrates; 46.2 g protein; 134 mg cholesterol; 738 mg sodium."
        },
        {
            title: "California Roll Sushi",
            category: "Japanese",
            ingredients: [
                "1/2 cup imitation crabmeat", 
                "8 sheets nori (dry seaweed)", 
                "1 cucumber", 
                "2 avocados"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/250x250/907484.jpg",
            cookingInstruction: [
                "Wash the rice in several changes of water until the rinse water is no longer cloudy, drain well, and place in a covered pan or rice cooker with 1 cup water. Bring to a boil, reduce heat to a simmer, and cover the pan. Allow the rice to simmer until the top looks dry, about 15 minutes. Turn off the heat, and let stand for 10 minutes to absorb the rest of the water.",
                "Mix the rice vinegar and sugar in a small bowl until the sugar has dissolved, and stir the mixture into the cooked rice until well combined. Allow the rice to cool, and set aside.",
                "Mix the imitation crabmeat with mayonnaise in a bowl, and set aside. To roll the sushi, cover a bamboo rolling mat with plastic wrap. Lay a sheet of nori, shiny side down, on the plastic wrap. With wet fingers, firmly pat a thin, even layer of prepared rice over the nori, leaving 1/4 inch uncovered at the bottom edge of the sheet. Sprinkle the rice with about 1/2 teaspoon of sesame seeds, and gently press them into the rice. Carefully flip the nori sheet over so the seaweed side is up.",
                "Place 2 or 3 long cucumber spears, 2 or 3 slices of avocado, and about 1 tablespoon of imitation crab mixture in a line across the nori sheet, about 1/4 from the uncovered edge. Pick up the edge of the bamboo rolling sheet, fold the bottom edge of the sheet up, enclosing the filling, and tightly roll the sushi into a cylinder about 1 1/2 inch in diameter. Once the sushi is rolled, wrap it in the mat and gently squeeze to compact it tightly.",
                "Cut each roll into 1 inch pieces with a very sharp knife dipped in water."
            ],
            nutritionFacts: "Per Serving: 232 calories; 14.4 g fat; 23.7 g carbohydrates; 3.9 g protein; 5 mg cholesterol; 135 mg sodium. "
        },
        {
            title: "General Tsao's Chicken",
            category: "Chinese",
            ingredients: [
                "1 egg", 
                "1 ½ pounds boneless, skinless chicken thighs", 
                "1 pinch white pepper", 
                "1 green onion",
                "1 clove garlic",
                "6 dried whole red chilies",
                "1 ginger"
            ],
            photoUrl: "https://spicysouthernkitchen.com/wp-content/uploads/general-tsau-chicken-15.jpg",
            cookingInstruction: [
                "Heat 4 cups vegetable oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).",
                "Beat the egg in a mixing bowl. Add the chicken cubes; sprinkle with salt, 1 teaspoon sugar, and white pepper; mix well. Mix in 1 cup of cornstarch a little bit at a time until the chicken cubes are well coated.",
                "In batches, carefully drop the chicken cubes into the hot oil one by one, cooking until they turns golden brown and begin to float, about 3 minutes. Remove the chicken and allow to cool as you fry the next batch. Once all of the chicken has been fried, refry the chicken, starting with the batch that was cooked first. Cook until the chicken turns deep golden brown, about 2 minutes more. Drain on a paper towel-lined plate.",
                "Heat 2 tablespoons vegetable oil in a wok or large skillet over high heat. Stir in the green onion, garlic, whole chiles, and orange zest. Cook and stir a minute or two until the garlic has turned golden and the chiles brighten. Add 1/2 cup sugar, the ginger, chicken broth, vinegar, soy sauce, sesame oil, and peanut oil; bring to a boil and cook for 3 minutes.",
                "Dissolve 2 teaspoons of cornstarch into the water, and stir into the boiling sauce. Return to a boil and cook until the sauce thickens and is no longer cloudy from the cornstarch, about 1 minute. Stir the chicken into the boiling sauce. Reduce heat to low and cook for a few minutes until the chicken absorbs some of the sauce."
            ],
            nutritionFacts: "Per Serving: 634 calories; 36.5 g total fat; 101 mg cholesterol; 1192 mg sodium. 54.9 g carbohydrates; 24.3 g protein."
        },
        {
            title: "Fresh Spring Rolls",
            category: "Vietnamese",
            ingredients: [
                "8 rice wrappers (8.5 inch diameter)", 
                "2 ounces rice vermicelli", 
                "8 large shrimps", 
                "1 bunch thai basil",
                "2 leaves lettuce",
                "1 clove garlic"
            ],
            photoUrl: "https://www.recipetineats.com/wp-content/uploads/2014/07/Vietnamese-Rice-Paper-Rolls-7.jpg",
            cookingInstruction: [
                "Bring a medium saucepan of water to boil. Boil rice vermicelli 3 to 5 minutes, or until al dente, and drain.",
                "Fill a large bowl with warm water. Dip one wrapper into the hot water for 1 second to soften. Lay wrapper flat. In a row across the center, place 2 shrimp halves, a handful of vermicelli, basil, mint, cilantro and lettuce, leaving about 2 inches uncovered on each side. Fold uncovered sides inward, then tightly roll the wrapper, beginning at the end with the lettuce. Repeat with remaining ingredients.",
                "In a small bowl, mix the fish sauce, water, lime juice, garlic, sugar and chili sauce.",
                "In another small bowl, mix the hoisin sauce and peanuts.",
                "Serve rolled spring rolls with the fish sauce and hoisin sauce mixtures."
            ],
            nutritionFacts: "Per Serving: 82 calories; 0.7 g fat; 15.8 g carbohydrates; 3.3 g protein; 11 mg cholesterol; 305 mg sodium."
        },
        {
            title: "Kim's Lasagna",
            category: "Italian",
            ingredients: [
                "1 pound bulk Italian sausage", 
                "1 pound ground beef", 
                "1 onion", 
                "4 cloves garlic",
                "1 bunch parsley",
                "12 lasagna noodles",
                "1 egg",
                "1 pinch ground nutmeg"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/720x405/1113127.jpg",
            cookingInstruction: [
                "Brown sausage and ground beef with onion and garlic in a large Dutch oven or heavy pot over medium heat, cooking and stirring until meat is cooked through, 10 to 15 minutes. Drain and discard grease. Stir tomato sauce, crushed tomatoes, Italian-style crushed tomatoes, tomato paste, basil, 2 tablespoons parsley, brown sugar, salt, Italian seasoning, black pepper, fennel seeds, and 1/2 cup Parmesan cheese into meat mixture. Bring to a boil, reduce heat to low, and simmer sauce for at least 1 hour (up to 6 for best flavor). Stir occasionally.",
                "Place lasagna noodles into a deep bowl and cover with very hot tap water; let soak for 30 minutes.",
                "Beat egg in a bowl and stir ricotta cheese, 2 tablespoons parsley, 1/2 teaspoon salt, and nutmeg into egg until thoroughly combined.",
                "Preheat oven to 375 degrees F (190 degrees C).",
                "Cover bottom of a 9x13-inch baking dish with 1 cup sauce. Layer 4 soaked lasagna noodles, 1/3 of the ricotta cheese mixture, 1/3 of the shredded mozzarella cheese, and 1/4 cup Parmesan cheese in the dish. Repeat layers twice more, ending with mozzarella and Parmesan cheeses. Cover dish with aluminum foil.",
                "Bake until lasagna noodles are tender and casserole is bubbling, about 50 minutes. Remove foil and bake until cheese topping is lightly browned, 15 to 20 more minutes. Let stand 15 minutes before serving."
            ],
            nutritionFacts: "Per Serving: 594 calories; 29.1 g fat; 43.4 g carbohydrates; 41.2 g protein; 115 mg cholesterol; 1898 mg sodium."
        }
    ].map(m => new Meal(m).save()));

    const selectedMeals = await Promise.all([
        {
            child: childs[0].id,
            meals: [{
                meal: meals[0].id,
                title: "Candy with added sugar",
                category: "Bacon",
                ingredients: "Double the amount of sugar"
            }]
        }
    ].map(sm => new SelectedMeal(sm).save()));

    res.status(200).json({
        users,
        childs,
        meals,
        selectedMeals,
    });
});

router.get("/clear_db", async (req, res)=>{
    const collections = await mongoose.connection.db.collections()

    const names = collections.map(c => c.collectionName);

    for (let collection of collections) {
        await collection.drop()
    }

    res.status(200).json({collections_dropped: names});
});

module.exports = router