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
        },
        {
            title: "Melissa's Chicken Cacciatore",
            category: "Italian",
            ingredients: [
                "1 (12 ounce) jar marinated artichoke hearts", 
                "2 large skinless, boneless chicken breast halves", 
                "1 large onion", 
                "3 cloves garlic",
                "8 ounces fresh mushrooms",
                "1 (14.5 ounce) can diced tomatoes in juice",
                "⅓ cup black olives",
                "8 ounces shredded mozzarella cheese"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/889256.jpg",
            cookingInstruction: [
                "Preheat oven to 350 degrees F (175 degrees C).",
                "Place half the artichoke marinade into a large skillet over medium-high heat, and brown the chicken pieces until the liquid has almost evaporated, 8 to 10 minutes. Remove the chicken pieces with a slotted spoon, and place into a 9x13-inch baking dish.",
                "Pour the remaining marinade into the same skillet, and cook and stir the onions, garlic, mushrooms, oregano, basil, salt, rosemary, and black pepper until the onions are translucent, 5 to 8 minutes. Mix in diced tomatoes with their juice, tomato sauce, black olives, and chopped artichoke hearts. Stir the sauce well, and pour over the chicken in the baking dish. Cover the dish with foil.",
                "Bake the chicken until the sauce is bubbling, about 45 minutes. Uncover, and drizzle the Madeira wine over the dish; top with mozzarella cheese. Return to oven, uncovered, and bake until the cheese is melted, about 10 more minutes."
            ],
            nutritionFacts: "Per Serving: 320 calories; 12 g total fat; 63 mg cholesterol; 1428 mg sodium. 21.2 g carbohydrates; 29.2 g protein."
        },
        {
            title: "French Toast",
            category: "American",
            ingredients: [
                "6 thick slices bread", 
                "2 eggs"
            ],
            photoUrl: "https://www.momables.com/wp-content/uploads/2013/12/Egg-free-french-toast_post.jpg",
            cookingInstruction: [
                "Beat together egg, milk, salt, desired spices and vanilla.",
                "Heat a lightly oiled griddle or skillet over medium-high heat.",
                "Dunk each slice of bread in egg mixture, soaking both sides. Place in pan, and cook on both sides until golden. Serve hot."
            ],
            nutritionFacts: "Per Serving: 240 calories; 6.4 g fat; 33.6 g carbohydrates; 10.6 g protein; 128 mg cholesterol; 478 mg sodium."
        },
        {
            title: "Easy Chicken Pasta Alfredo",
            category: "American",
            ingredients: [
                "4 skinless, boneless chicken breast halves", 
                "½ pound fresh mushrooms",
                "⅓ cup grated Parmesan cheese"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/1105549.jpg",
            cookingInstruction: [
                "Bring a large pot of lightly salted water to a boil. Add tortellini. Cook, stirring occasionally, until tortellini float to the top and the filling is hot, about 5 minutes. Drain.",
                "Heat vegetable oil in a large skillet over medium heat; cook and stir chicken breast in hot oil until no longer pink in the center, about 10 minutes. Remove from heat.",
                "Melt butter in another skillet over medium heat; cook and stir mushrooms and garlic powder until mushrooms begin to soften, about 3 minutes. Stir heavy cream into mushrooms and bring to a boil. Reduce heat to medium-low and simmer until slightly thickened, about 3 minutes. Add Parmesan cheese, parsley, and salt. Continue to cook until cheese is melted, about 1 minute.",
                "Stir tortellini and chicken into mushroom-cream sauce. Simmer until heated through, about 2 minutes."
            ],
            nutritionFacts: "Per Serving: 686 calories; 46.9 g total fat; 201 mg cholesterol; 843 mg sodium. 38.4 g carbohydrates; 30.2 g protein."
        },
        {
            title: "Beef and Sweet Potato Stew",
            category: "American",
            ingredients: [
                "1 1/2 pounds top round beef", 
                "2 large sweet potatoes",
                "2 carrots",
                "2 stalks celery",
                "1 (8 ounce) package pearl onions",
                "1 (4.5 ounce) can mushrooms",
                "1 (28 ounce) can tomato puree",
                "1 clove garlic"
            ],
            photoUrl: "https://www.diabetesfoodhub.org/system/thumbs/system/images/recipes/Recid_78_beef_sweet_potato_stew_iStock585609020_022118_2959761669.jpg",
            cookingInstruction: [
                "Preheat the oven to 300 degrees F (150 degrees C).",
                "Place chunks of meat into a large baking pan. Add sweet potatoes, carrots, celery, onions, and mushrooms.",
                "Combine tomato puree, water, gravy mix, garlic, thyme, garlic salt, and black pepper in a bowl. Pour over meat and vegetables in the baking pan. Cover with aluminum foil.",
                "Bake in the preheated oven for about 3 hours."
            ],
            nutritionFacts: "Per Serving: 384 calories; 7.5 g fat; 55.3 g carbohydrates; 25.9 g protein; 50 mg cholesterol; 1255 mg sodium."
        },
        {
            title: "Orange and Milk-Braised Pork Carnitas",
            category: "American",
            ingredients: [
                "3 1/2 pounds boneless pork shoulder", 
                "2 bay leaves",
                "1 orange"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/250x250/2280918.jpg",
            cookingInstruction: [
                "Season pork with pepper and salt.",
                "Heat oil in large pot over high heat. Working in batches, cook pork in the hot oil until browned on all sides, about 5 minutes. Return all cooked pork and accumulated juice to pot.",
                "Season pork with bay leaves, cumin, dried oregano, and cayenne pepper. Stir in fresh orange juice, orange zest, and milk. Bring mixture to a boil over high heat; reduce heat to low. Cover and simmer, stirring occasionally, until meat is fork tender but not falling apart, about 2 hours.",
                "Preheat oven to 450 degrees F (230 degrees C).",
                "Remove pork from liquid. Skim some fat from the pot to grease a baking dish. Transfer the pieces of pork to the baking dish. Drizzle about 2 more tablespoons of the floating fat over the meat. Season with more salt, if needed.",
                "Bake in preheated oven until pork is browned, about 15 minutes. Stir pork.",
                "Turn on oven's broiler. Cook pork under broiler until crisp, 2 to 3 minutes."
            ],
            nutritionFacts: "Per Serving: 325 calories; 24.1 g fat; 3.7 g carbohydrates; 22.4 g protein; 84 mg cholesterol; 805 mg sodium."
        },
        {
            title: "Chef John's Shrimp Etouffee",
            category: "American",
            ingredients: [
                "2 pounds shrimp", 
                "1 green bell pepper",
                "1 pound celery",
                "2 tomatoes",
                "3 green onions"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/560x315/5118524.jpg",
            cookingInstruction: [
                "Whisk paprika, thyme, oregano, cayenne pepper, garlic powder, onion powder, white pepper, and black pepper together in a small bowl.",
                "Drain shrimp in a colander for at least 15 minutes. Transfer to a bowl lined with paper towels and dry shrimp for about 3 minutes. Remove paper towels from bowl and season shrimp with 1 teaspoon salt and 1 teaspoon spice blend. Toss to coat shrimp with spice blend.",
                "Heat vegetable oil a large heavy skillet over high heat until oil is smoking hot. Cook shrimp in the hot oil without stirring for 1 minute; stir, and cook 1 minute more.",
                "Transfer shrimp to a large bowl. Let stand until juice forms in bowl. Strain shrimp juices into chicken stock to total 2 cups, adding more chicken stock if necessary.",
                "Melt butter in large skillet over medium heat until butter begins to turn tan at the edges. Saute onion, celery, and green pepper in hot butter until softened, about 5 minutes. Pour in remaining spice blend.",
                "Sprinkle flour into vegetable mixture and saute until combined, 3 to 4 minutes. Stir in tomatoes; cook until tomato juices begin to brown on bottom of pan, about 3 minutes. Whisk stock into vegetable mixture, stirring until smooth. Bring to a simmer and cook until slightly thickened and reduced to a gravy consistency, 3 to 5 minutes. Stir in Worcestershire sauce and hot sauce. Season with salt to taste.",
                "Stir shrimp into etouffee sauce; let simmer until shrimp are cooked all the way through and no longer translucent, about 1 minute.",
                "Garnish with green onions and a dusting of cayenne pepper. Pour over rice in large, shallow bowls."
            ],
            nutritionFacts: "Per Serving: 424 calories; 14.7 g fat; 30.2 g carbohydrates; 40.8 g protein; 369 mg cholesterol; 1114 mg sodium."
        },
        {
            title: "Thai Curry Tofu",
            category: "Thai",
            ingredients: [
                "1 (12 ounce) package extra-firm tofu", 
                "1 small onion",
                "3 cloves garlic",
                "¼ cup fresh cilantro"
            ],
            photoUrl: "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/8132_sfs-skillet-thai-curry-with-sweet-potatoes-and-tofu-article",
            cookingInstruction: [
                "Heat oil in a large skillet over medium-high heat. Add tofu cubes, season with seasoned salt and fry until golden on all sides, stirring occasionally, about 15 minutes. Remove to paper towels, and set aside.",
                "Melt butter or margarine in the same skillet over medium heat. Add the onion and garlic; cook and stir until tender. Stir in coconut milk, curry powder, salt, pepper and cilantro. Return the tofu to the skillet. Simmer over low heat for 15 minutes, stirring occasionally."
            ],
            nutritionFacts: "Per Serving: 424 calories; 14.7 g fat; 30.2 g carbohydrates; 40.8 g protein; 369 mg cholesterol; 1114 mg sodium."
        },
        {
            title: "Lori's Famous Crab Cakes",
            category: "American",
            ingredients: [
                "1 green bell pepper",
                "2 green onions",
                "4 sprigs fresh parsley",
                "1 egg",
                "3 (6 ounce) cans crabmeat"
            ],
            photoUrl: "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/8132_sfs-skillet-thai-curry-with-sweet-potatoes-and-tofu-article",
            cookingInstruction: [
                "In a bowl, toss together the 1/3 cup bread crumbs, green bell pepper, red bell pepper, green onions, and parsley. Mix in the egg white, mayonnaise, lemon juice, Worcestershire sauce, and Dijon mustard. Season with Old Bay seasoning, dry mustard, and onion powder. Fold crabmeat into the mixture. Form into 6 large cakes. Coat in the remaining 1/2 cup bread crumbs.",
                "Heat the oil in a large, heavy skillet. Fry the cakes 5 minutes on each side, or until evenly brown. Drain on paper towels."
            ],
            nutritionFacts: "Per Serving: 225 calories; 9.4 g fat; 13.8 g carbohydrates; 20.7 g protein; 77 mg cholesterol; 508 mg sodium."
        },
        {
            title: "Broccoli in Roast Chicken Drippings",
            category: "American",
            ingredients: [
                "¼ cup roast chicken drippings",
                "1 head broccoli",
                "2 cloves garlic"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/1019848.jpg",
            cookingInstruction: [
                "After roasting a chicken, remove it from the roasting pan and place on a serving tray to rest. Leave the oven on. Pour off excess drippings from the roasting pan, leaving just enough to coat the broccoli. Toss broccoli and garlic in the drippings until coated and place in the still hot oven. Roast for 5 to 8 minutes, until tender."
            ],
            nutritionFacts: "Per Serving: 225 calories; 9.4 g fat; 13.8 g carbohydrates; 20.7 g protein; 77 mg cholesterol; 508 mg sodium."
        },
        {
            title: "Pork Dumplings",
            category: "Chinese",
            ingredients: [
                "100 (3.5 inch square) wonton wrappers",
                "1 3/4 pounds ground pork",
                "4 cloves garlic",
                "1 egg",
                "1 Chinese cabbage"
            ],
            photoUrl: "https://www.garlicandzest.com/wp-content/uploads/2016/02/pork-dumplings-6.jpg",
            cookingInstruction: [
                "In a large bowl, combine the pork, ginger, garlic, green onion, soy sauce, sesame oil, egg and cabbage. Stir until well mixed.",
                "Place 1 heaping teaspoon of pork filling onto each wonton skin. Moisten edges with water and fold edges over to form a triangle shape. Roll edges slightly to seal in filling. Set dumplings aside on a lightly floured surface until ready to cook.",
                "To Cook: Steam dumplings in a covered bamboo or metal steamer for about 15 to 20 minutes. Serve immediately."
            ],
            nutritionFacts: "Per Serving: 752 calories; 28.8 g fat; 81.1 g carbohydrates; 39.2 g protein; 129 mg cholesterol; 1449 mg sodium."
        },
        {
            title: "Yakisoba Chicken",
            category: "Japanese",
            ingredients: [
                "2 cloves garlic",
                "4 skinless, boneless chicken breast halves",
                "1 onion",
                "½ medium head cabbage",
                "2 carrots",
                "8 ounces soba noodles"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/2220105.jpg",
            cookingInstruction: [
                "In a large skillet combine sesame oil, canola oil and chili paste; stir-fry 30 seconds. Add garlic and stir fry an additional 30 seconds. Add chicken and 1/4 cup of the soy sauce and stir fry until chicken is no longer pink, about 5 minutes. Remove mixture from pan, set aside, and keep warm.",
                "In the emptied pan combine the onion, cabbage, and carrots. Stir-fry until cabbage begins to wilt, 2 to 3 minutes. Stir in the remaining soy sauce, cooked noodles, and the chicken mixture to pan and mix to blend. Serve and enjoy!"
            ],
            nutritionFacts: "Per Serving: 752 calories; 28.8 g fat; 81.1 g carbohydrates; 39.2 g protein; 129 mg cholesterol; 1449 mg sodium."
        },
        {
            title: "Pork Fried Rice",
            category: "Chinese, American",
            ingredients: [
                "1 (6 ounce) boneless pork loin chop",
                "1 carrot",
                "1 broccoli",
                "1 green onion",
                "1 egg",
                "rice",
                "1 bag peas"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/720x405/1353688.jpg",
            cookingInstruction: [
                "Melt butter in a large non-stick skillet over medium heat. Cook and stir pork, carrot, broccoli, peas, and green onion in melted butter until pork is cooked through, 7 to 10 minutes. Remove pork mixture to a bowl and return skillet to medium heat.",
                "Scramble egg in the skillet until completely set. Return the pork mixture to the skillet. Stir rice, peas, soy sauce, garlic powder, and ground ginger into the pork mixture; cook and stir until heated through, 7 to 10 minutes."
            ],
            nutritionFacts: "Per Serving: 557 calories; 13.3 g fat; 80.7 g carbohydrates; 26.1 g protein; 137 mg cholesterol; 815 mg sodium."
        },
        {
            title: "Shrimp Fried Rice",
            category: "Chinese, American",
            ingredients: [
                "1 ounce bean sprouts",
                "1 onion",
                "2 ounces medium shrimp",
                "1 green onion",
                "2 eggs",
                "rice"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/720x405/4557813.jpg",
            cookingInstruction: [
                "In a saucepan bring water to a boil. Add rice and stir. Reduce heat, cover and simmer for 20 minutes. Set aside and allow rice to cool.",
                "Heat a large skillet or wok for 2 minutes. When the skillet or wok is hot, pour in vegetable oil, bean sprouts and onions. Mix well and cook for 3 minutes.",
                "Mix in cooled rice and shrimp and cook for another 3 minutes. Stirring constantly.",
                "Mix in green onions, eggs, salt, pepper, soy sauce and sesame oil. Cook for another 4 minutes, stirring continuously, until eggs are cooked and everything is blended evenly."
            ],
            nutritionFacts: "Per Serving: 483 calories; 17.5 g fat; 60.3 g carbohydrates; 20 g protein; 187 mg cholesterol; 1638 mg sodium."
        },
        {
            title: "Avocado Toast",
            category: "American",
            ingredients: [
                "2 slices bread",
                "2 ounces Cheddar cheese",
                "1 avocado"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/720x405/4557813.jpg",
            cookingInstruction: [
                "Preheat oven to 300 degrees F (150 degrees C).",
                "Heat a large skillet or wok for 2 minutes. When the skillet or wok is hot, pour in vegetable oil, bean sprouts and onions. Mix well and cook for 3 minutes.",
                "Bake in the preheated oven until cheese melts, about 5 minutes. Cover each bread slice with sliced avocado."
            ],
            nutritionFacts: "Per Serving: 483 calories; 17.5 g fat; 60.3 g carbohydrates; 20 g protein; 187 mg cholesterol; 1638 mg sodium."
        },
        {
            title: "Turkey Sandwiches",
            category: "American",
            ingredients: [
                "1 loaf French bread",
                "8 ounces sliced deli turkey meat",
                "8 slices provolone cheese",
                "8 slices precooked bacon",
                "1 pound tomatoes",
                "4 lettuce leaves"
            ],
            photoUrl: "https://wearychef.com/wp-content/uploads/2016/01/turkey-sandwich-with-goat-cheese-and-jam-6.jpg",
            cookingInstruction: [
                "Preheat the oven broiler.",
                "Cut the bread into four pieces, and split lengthwise almost all the way through for four sandwiches. Spread margarine on the inside of each piece. Place on a baking sheet, cut side up.",
                "Toast bread under preheated broiler until lightly browned, 1 to 2 minutes. Remove pan from the oven.",
                "Layer 4 pieces of bread with 2 slices each of the turkey, cheese, and bacon. Remove the remaining 4 slices of bread from the baking sheet and reserve for sandwich tops. Cool bread slightly, and spread mayonnaise onto the cut side of each of the 4 top slices.",
                "Place the bread with turkey and cheese under the broiler just until the cheese melts, about 1 minute. Remove from the broiler, and spread 1 tablespoon cranberry sauce over each sandwich. Layer with the tomatoes and lettuce. Place a top bread slice over each half, and serve."
            ],
            nutritionFacts: "Per Serving: 1068 calories; 65.8 g fat; 70.1 g carbohydrates; 49.5 g protein; 128 mg cholesterol; 3322 mg sodium."
        },
        {
            title: "Ignacio's Super Peanut Butter and Jelly Sandwich",
            category: "American",
            ingredients: [
                "3 slices bread"
            ],
            photoUrl: "https://wearychef.com/wp-content/uploads/2016/01/turkey-sandwich-with-goat-cheese-and-jam-6.jpg",
            cookingInstruction: [
                "Toast 1 bread slice, allow to cool. Spread one side of each of the two remaining slices with preserves. Spread both sides of the toasted slice with peanut butter. Form a sandwich with the toasted slice in the center."
            ],
            nutritionFacts: "Per Serving: 1068 calories; 65.8 g fat; 70.1 g carbohydrates; 49.5 g protein; 128 mg cholesterol; 3322 mg sodium."
        },
        {
            title: "Shrimp Scampi with Pasta",
            category: "American",
            ingredients: [
                "1 (16 ounce) package linguine pasta",
                "2 shallots",
                "2 cloves garlic",
                "1 pound shrimp",
                "1 lemon",
                "1 ounce parsley leaves"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/720x405/2606852.jpg",
            cookingInstruction: [
                "Bring a large pot of salted water to a boil; cook linguine in boiling water until nearly tender, 6 to 8 minutes. Drain.",
                "Melt 2 tablespoons butter with 2 tablespoons olive oil in a large skillet over medium heat. Cook and stir shallots, garlic, and red pepper flakes in the hot butter and oil until shallots are translucent, 3 to 4 minutes. Season shrimp with kosher salt and black pepper; add to the skillet and cook until pink, stirring occasionally, 2 to 3 minutes. Remove shrimp from skillet and keep warm.",
                "Pour white wine and lemon juice into skillet and bring to a boil while scraping the browned bits of food off of the bottom of the skillet with a wooden spoon. Melt 2 tablespoons butter in skillet, stir 2 tablespoons olive oil into butter mixture, and bring to a simmer. Toss linguine, shrimp, and parsley in the butter mixture until coated; season with salt and black pepper. Drizzle with 1 teaspoon olive oil to serve."
            ],
            nutritionFacts: "Per Serving: 511 calories; 19.4 g fat; 57.5 g carbohydrates; 21.9 g protein; 135 mg cholesterol; 260 mg sodium."
        },
        {
            title: "Cream Cheese and Crab Sushi Rolls",
            category: "Japanese",
            ingredients: [
                "2 sheets nori seaweed sheets",
                "1 cucumber",
                "2 pieces imitation crab legs",
                "1/2 (3 ounce) package cream cheese",
                "rice"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/720x405/4208534.jpg",
            cookingInstruction: [
                "Bring the rice and water to a boil in a saucepan over high heat. Reduce heat to medium-low, cover, and simmer until the rice is tender, and the liquid has been absorbed, 20 to 25 minutes. Stir in rice vinegar and salt. Allow to cool completely.",
                "Lay out seaweed sheets. Moisten hands with water, then spread the rice evenly on each sheet, leaving a 1/2 inch gap along one edge, lengthwise. Arrange strips of cucumber, imitation crabmeat, and cream cheese in a straight line along the side opposite of the gap. Roll the sushi from the toppings to the exposed end of the the seaweed sheet.",
                "Using a sharp wet knife, slice each roll into 5 or 6 pieces. Serve with minced ginger on the side."
            ],
            nutritionFacts: "Per Serving: 444 calories; 8.2 g fat; 79.9 g carbohydrates; 10.7 g protein; 29 mg cholesterol; 1475 mg sodium."
        },
        {
            title: "Gyoza",
            category: "Japanese",
            ingredients: [
                "1 cabbage",
                "5 onions",
                "1 clove garlic",
                "1 carrot",
                "1/2 pound ground pork",
                "1 egg",
                "1 (10 ounce) package wonton wrappers"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/250x250/313346.jpg",
            cookingInstruction: [
                "Heat sesame oil in a large skillet over medium high heat. Mix in cabbage, onion, garlic and carrot. Cook and stir until cabbage is limp. Mix in ground pork and egg. Cook until pork is evenly brown and egg is no longer runny.",
                "Preheat vegetable oil in a large skillet over medium high heat.",
                "Place approximately 1 tablespoon of the cabbage and pork mixture in the center of each wrapper. Fold wrappers in half over filling, and seal edges with moistened fingers.",
                "In the preheated vegetable oil, cook gyoza approximately 1 minute per side, until lightly browned. Place water into skillet and reduce heat. Cover and allow gyoza to steam until the water is gone.",
                "In a small bowl, mix soy sauce and rice vinegar. Use the mixture as a dipping sauce for the finished wrappers."
            ],
            nutritionFacts: "Per Serving: 184 calories; 8.5 g fat; 18.5 g carbohydrates; 7.9 g protein; 37 mg cholesterol; 546 mg sodium."
        },
        {
            title: "Soba with Toasted Sesame Seed Sauce",
            category: "Japanese",
            ingredients: [
                "8 ounces dried soba noodles",
                "5 onions",
                "1 clove garlic",
                "5 green onions",
                "1 broccoli"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/720x405/1167296.jpg",
            cookingInstruction: [
                "Preheat the oven to 375 degrees F (190 degrees C).",
                "Pour the sesame seeds onto a rimmed baking sheet. Toast the seeds in the oven for 10 to 12 minutes, until they are a rich brown around the edges.",
                "Meanwhile, bring a large pot of salted water to a boil. Add the noodles and cook them for 5 to 6 minutes, or until they are just tender. Drain them, rinse them well with cold water, and drain them again.",
                "In a large mixing bowl, mix together the vinegar, sugar, soy sauce, garlic, sesame oil and green onions. Add the noodles, and the toasted sesame seeds. Toss well, then stir in the broccoli. Let the dish sit for 30 minutes at room temperature before serving."
            ],
            nutritionFacts: "Per Serving: 355 calories; 10.9 g fat; 57.3 g carbohydrates; 14.2 g protein; 0 mg cholesterol; 1037 mg sodium."
        },
        {
            title: "Miso Salmon",
            category: "Japanese",
            ingredients: [
                "2 pounds salmon",
                "rice"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/720x405/6538331.jpg",
            cookingInstruction: [
                "Preheat the oven to 400 degrees F (200 degrees C). Fill a large skillet with about 1 inch of water and bring to a boil. Poach fish just until cooked on the outside, about 2 minutes per side. Transfer fillets to a broiler pan.",
                "In a small bowl, stir together the miso paste, sake, brown sugar, sesame seeds, sesame oil, water, salad dressing and rice vinegar. Spread this over the tops of the salmon fillets.",
                "Bake for 15 minutes in the preheated oven, or until almost cooked through. Switch the oven to broil, and broil until the top is browned and bubbly, about 5 more minutes. Cut fillets into portions to serve."
            ],
            nutritionFacts: "Per Serving: 719 calories; 40.5 g fat; 34.9 g carbohydrates; 50.5 g protein; 132 mg cholesterol; 2247 mg sodium."
        },
        {
            title: "Inside Out Ravioli",
            category: "American",
            ingredients: [
                "16 ounces pasta",
                "1 package spinach",
                "2 ounces bread crumbs",
                "2 eggs",
                "1 ounce shredded mozzarella cheese",
                "1 pound lean ground beef",
                "4 onions",
                "1 clove garlic",
                "1 (8 ounce) can tomato sauce",
                "1 (6 ounce) can tomato paste",
                "1 (16 ounce) jar spaghetti sauce"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/720x405/663068.jpg",
            cookingInstruction: [
                "In a medium pot cook pasta in boiling salted water until al dente. Drain well.",
                "Cook spinach according to package directions.",
                "Meanwhile, brown ground beef, chopped onion, and minced garlic in a large skillet over medium heat. Stir in tomato sauce, tomato paste, and pasta sauce. Simmer for 10 minutes.",
                "Combine cooked spinach, cooked pasta, bread crumbs, shredded cheese, beaten eggs, and olive oil.",
                "Spread spinach mixture evenly into the bottom of a 9x13 inch baking dish. Top with meat mixture.",
                "Bake in a preheated 350 degree F oven (175 degree C) for 30 minutes."
            ],
            nutritionFacts: "Per Serving: 545 calories; 26.4 g fat; 51.7 g carbohydrates; 25.7 g protein; 142 mg cholesterol; 779 mg sodium."
        },
        {
            title: "Inside Out Ravioli",
            category: "American",
            ingredients: [
                "16 ounces pasta",
                "1 package spinach",
                "2 ounces bread crumbs",
                "2 eggs",
                "1 ounce shredded mozzarella cheese",
                "1 pound lean ground beef",
                "4 onions",
                "1 clove garlic",
                "1 (8 ounce) can tomato sauce",
                "1 (6 ounce) can tomato paste",
                "1 (16 ounce) jar spaghetti sauce"
            ],
            photoUrl: "https://images.media-allrecipes.com/userphotos/720x405/663068.jpg",
            cookingInstruction: [
                "In a medium pot cook pasta in boiling salted water until al dente. Drain well.",
                "Cook spinach according to package directions.",
                "Meanwhile, brown ground beef, chopped onion, and minced garlic in a large skillet over medium heat. Stir in tomato sauce, tomato paste, and pasta sauce. Simmer for 10 minutes.",
                "Combine cooked spinach, cooked pasta, bread crumbs, shredded cheese, beaten eggs, and olive oil.",
                "Spread spinach mixture evenly into the bottom of a 9x13 inch baking dish. Top with meat mixture.",
                "Bake in a preheated 350 degree F oven (175 degree C) for 30 minutes."
            ],
            nutritionFacts: "Per Serving: 545 calories; 26.4 g fat; 51.7 g carbohydrates; 25.7 g protein; 142 mg cholesterol; 779 mg sodium."
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