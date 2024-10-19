import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import close from '../assets/close-_icon.png'

const Recipe = ({ url, apikey }) => {
  const [invisible, setinvisible] = useState(true);
  const data = {
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 12,
    gaps: "no",
    preparationMinutes: null,
    cookingMinutes: null,
    aggregateLikes: 4,
    healthScore: 37,
    creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    license: "CC BY 3.0",
    sourceName: "Foodista",
    pricePerServing: 197.17,
    extendedIngredients: [
      {
        id: 10920420,
        aisle: "Pasta and Rice",
        image: "orzo.jpg",
        consistency: "SOLID",
        name: "orzo",
        nameClean: "orzo",
        original: "1 pound orzo",
        originalName: "orzo",
        amount: 1,
        unit: "pound",
        meta: [],
        measures: {
          us: {
            amount: 1,
            unitShort: "lb",
            unitLong: "pound",
          },
          metric: {
            amount: 453.592,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 1082047,
        aisle: "Spices and Seasonings",
        image: "salt.jpg",
        consistency: "SOLID",
        name: "kosher salt",
        nameClean: "kosher salt",
        original: "Kosher salt",
        originalName: "Kosher salt",
        amount: 10,
        unit: "servings",
        meta: [],
        measures: {
          us: {
            amount: 10,
            unitShort: "servings",
            unitLong: "servings",
          },
          metric: {
            amount: 10,
            unitShort: "servings",
            unitLong: "servings",
          },
        },
      },
      {
        id: 12147,
        aisle: "Produce",
        image: "pine-nuts.png",
        consistency: "SOLID",
        name: "pine nuts",
        nameClean: "pine nuts",
        original: "1/2 cup pine nuts",
        originalName: "pine nuts",
        amount: 0.5,
        unit: "cup",
        meta: [],
        measures: {
          us: {
            amount: 0.5,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 67.5,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 1034053,
        aisle: "Oil, Vinegar, Salad Dressing",
        image: "olive-oil.jpg",
        consistency: "LIQUID",
        name: "evoo",
        nameClean: "extra virgin olive oil",
        original: "8 tablespoons EVOO",
        originalName: "EVOO",
        amount: 8,
        unit: "tablespoons",
        meta: [],
        measures: {
          us: {
            amount: 8,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
          metric: {
            amount: 8,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
        },
      },
      {
        id: 11291,
        aisle: "Produce",
        image: "spring-onions.jpg",
        consistency: "SOLID",
        name: "green onions",
        nameClean: "spring onions",
        original: "4 green onions, chopped",
        originalName: "green onions, chopped",
        amount: 4,
        unit: "",
        meta: ["chopped"],
        measures: {
          us: {
            amount: 4,
            unitShort: "",
            unitLong: "",
          },
          metric: {
            amount: 4,
            unitShort: "",
            unitLong: "",
          },
        },
      },
      {
        id: 10311297,
        aisle: "Produce",
        image: "parsley.jpg",
        consistency: "SOLID",
        name: "parsley",
        nameClean: "flat leaf parsley",
        original: "1/2 cup Italian parsley, chopped",
        originalName: "Italian parsley, chopped",
        amount: 0.5,
        unit: "cup",
        meta: ["italian", "chopped"],
        measures: {
          us: {
            amount: 0.5,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 30,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 9150,
        aisle: "Produce",
        image: "lemon.png",
        consistency: "SOLID",
        name: "lemon zest",
        nameClean: "lemon",
        original: "1 Juice and zest of 1 lemon",
        originalName: "Juice and zest of 1 lemon",
        amount: 1,
        unit: "",
        meta: [],
        measures: {
          us: {
            amount: 1,
            unitShort: "",
            unitLong: "",
          },
          metric: {
            amount: 1,
            unitShort: "",
            unitLong: "",
          },
        },
      },
      {
        id: 11206,
        aisle: "Produce",
        image: "cucumber.jpg",
        consistency: "SOLID",
        name: "cucumber",
        nameClean: "cucumber",
        original: "1 cucumber, diced",
        originalName: "cucumber, diced",
        amount: 1,
        unit: "",
        meta: ["diced"],
        measures: {
          us: {
            amount: 1,
            unitShort: "",
            unitLong: "",
          },
          metric: {
            amount: 1,
            unitShort: "",
            unitLong: "",
          },
        },
      },
      {
        id: 11333,
        aisle: "Produce",
        image: "green-pepper.jpg",
        consistency: "SOLID",
        name: "bell pepper",
        nameClean: "green pepper",
        original: "1 green bell pepper, chopped",
        originalName: "green bell pepper, chopped",
        amount: 1,
        unit: "",
        meta: ["green", "chopped"],
        measures: {
          us: {
            amount: 1,
            unitShort: "",
            unitLong: "",
          },
          metric: {
            amount: 1,
            unitShort: "",
            unitLong: "",
          },
        },
      },
      {
        id: 10311529,
        aisle: "Produce",
        image: "cherry-tomatoes.png",
        consistency: "SOLID",
        name: "cherry tomatoes",
        nameClean: "cherry tomato",
        original: "1 pint cherry tomatoes",
        originalName: "cherry tomatoes",
        amount: 1,
        unit: "pint",
        meta: [],
        measures: {
          us: {
            amount: 1.052,
            unitShort: "pts",
            unitLong: "pints",
          },
          metric: {
            amount: 1.052,
            unitShort: "pts",
            unitLong: "pints",
          },
        },
      },
      {
        id: 10011282,
        aisle: "Produce",
        image: "red-onion.png",
        consistency: "SOLID",
        name: "onion",
        nameClean: "red onion",
        original: "1/2 red onion, finely chopped",
        originalName: "red onion, finely chopped",
        amount: 0.5,
        unit: "",
        meta: ["red", "finely chopped"],
        measures: {
          us: {
            amount: 0.5,
            unitShort: "",
            unitLong: "",
          },
          metric: {
            amount: 0.5,
            unitShort: "",
            unitLong: "",
          },
        },
      },
      {
        id: 11976,
        aisle: "Canned and Jarred",
        image: "wax-peppers.png",
        consistency: "SOLID",
        name: "pepperoncinis",
        nameClean: "banana pepper",
        original: "12 pepperoncinis, sliced",
        originalName: "pepperoncinis, sliced",
        amount: 12,
        unit: "",
        meta: ["sliced"],
        measures: {
          us: {
            amount: 12,
            unitShort: "",
            unitLong: "",
          },
          metric: {
            amount: 12,
            unitShort: "",
            unitLong: "",
          },
        },
      },
      {
        id: 1019,
        aisle: "Cheese",
        image: "feta.png",
        consistency: "SOLID",
        name: "feta cheese",
        nameClean: "feta cheese",
        original: "1 1/2 cups crumbled feta cheese",
        originalName: "crumbled feta cheese",
        amount: 1.5,
        unit: "cups",
        meta: ["crumbled"],
        measures: {
          us: {
            amount: 1.5,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 225,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 1022068,
        aisle: "Oil, Vinegar, Salad Dressing",
        image: "red-wine-vinegar.jpg",
        consistency: "LIQUID",
        name: "red wine vinegar",
        nameClean: "red wine vinegar",
        original: "4 tablespoons red wine vinegar",
        originalName: "red wine vinegar",
        amount: 4,
        unit: "tablespoons",
        meta: [],
        measures: {
          us: {
            amount: 4,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
          metric: {
            amount: 4,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
        },
      },
    ],
    id: 651426,
    title: "Mediterranean Orzo Salad",
    readyInMinutes: 45,
    servings: 10,
    sourceUrl:
      "https://www.foodista.com/recipe/P6QQ46HN/mediterranean-orzo-salad",
    image: "https://img.spoonacular.com/recipes/651426-556x370.jpg",
    imageType: "jpg",
    summary:
      'Mediterranean Orzo Salad is a hor d\'oeuvre that serves 10. One serving contains <b>399 calories</b>, <b>11g of protein</b>, and <b>22g of fat</b>. For <b>$1.97 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. 4 people were impressed by this recipe. It is brought to you by Foodista. If you have red wine vinegar, evoo, lemon zest, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Overall, this recipe earns a <b>solid spoonacular score of 80%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/mediterranean-orzo-salad-689937">Mediterranean Orzo Salad</a>, <a href="https://spoonacular.com/recipes/mediterranean-orzo-salad-1298275">Mediterranean Orzo Salad</a>, and <a href="https://spoonacular.com/recipes/mediterranean-orzo-salad-924212">Mediterranean Orzo Salad</a>.',
    cuisines: [],
    dishTypes: [
      "side dish",
      "antipasti",
      "salad",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre",
    ],
    diets: [],
    occasions: [],
    instructions:
      "Bring a pot of water to a rapid boil. Generously salt water and cook orzo until tender, approximately 7-9 minutes. Drain and set aside.\nWhile orzo is cooking, spread pine nuts on a baking sheet and toast lightly in oven on 400 degrees. Remove from oven and set aside.\nHeat two tablespoons of EVOO on medium heat in a non-stick pan. Saute chopped green onions for approximately 2 minutes. Add parsley, lemon juice, lemon zest, toasted pine nuts and cooked orzo. Saute for 3-4 minutes for flavors to combine and absorb into the orzo. Remove from heat.\nIn a large bowl, combine cucumber, green bell pepper, cherry tomatoes, red onion and pepperoncinis to orzo mixture. Additionally add crumbled feta cheese, red wine vinegar and remaining six tablespoons of EVOO. Mix well. Can be refrigerated or served immediately.",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Bring a pot of water to a rapid boil. Generously salt water and cook orzo until tender, approximately 7-9 minutes.",
            ingredients: [
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image: "water.png",
              },
              {
                id: 10920420,
                name: "orzo",
                localizedName: "orzo",
                image: "orzo.jpg",
              },
              {
                id: 2047,
                name: "salt",
                localizedName: "salt",
                image: "salt.jpg",
              },
            ],
            equipment: [
              {
                id: 404752,
                name: "pot",
                localizedName: "pot",
                image:
                  "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg",
              },
            ],
            length: {
              number: 9,
              unit: "minutes",
            },
          },
          {
            number: 2,
            step: "Drain and set aside.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 3,
            step: "While orzo is cooking, spread pine nuts on a baking sheet and toast lightly in oven on 400 degrees.",
            ingredients: [
              {
                id: 12147,
                name: "pine nuts",
                localizedName: "pine nuts",
                image: "pine-nuts.png",
              },
              {
                id: 0,
                name: "spread",
                localizedName: "spread",
                image: "",
              },
              {
                id: 0,
                name: "sandwich bread",
                localizedName: "sandwich bread",
                image: "white-bread.jpg",
              },
              {
                id: 10920420,
                name: "orzo",
                localizedName: "orzo",
                image: "orzo.jpg",
              },
            ],
            equipment: [
              {
                id: 404727,
                name: "baking sheet",
                localizedName: "baking sheet",
                image:
                  "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg",
              },
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
              },
            ],
          },
          {
            number: 4,
            step: "Remove from oven and set aside.",
            ingredients: [],
            equipment: [
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
              },
            ],
          },
          {
            number: 5,
            step: "Heat two tablespoons of EVOO on medium heat in a non-stick pan.",
            ingredients: [
              {
                id: 1034053,
                name: "extra virgin olive oil",
                localizedName: "extra virgin olive oil",
                image: "olive-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "https://spoonacular.com/cdn/equipment_100x100/pan.png",
              },
            ],
          },
          {
            number: 6,
            step: "Saute chopped green onions for approximately 2 minutes.",
            ingredients: [
              {
                id: 11291,
                name: "green onions",
                localizedName: "green onions",
                image: "spring-onions.jpg",
              },
            ],
            equipment: [],
            length: {
              number: 2,
              unit: "minutes",
            },
          },
          {
            number: 7,
            step: "Add parsley, lemon juice, lemon zest, toasted pine nuts and cooked orzo.",
            ingredients: [
              {
                id: 10920421,
                name: "cooked orzo",
                localizedName: "cooked orzo",
                image: "orzo.jpg",
              },
              {
                id: 9152,
                name: "lemon juice",
                localizedName: "lemon juice",
                image: "lemon-juice.jpg",
              },
              {
                id: 9156,
                name: "lemon zest",
                localizedName: "lemon zest",
                image: "zest-lemon.jpg",
              },
              {
                id: 12147,
                name: "pine nuts",
                localizedName: "pine nuts",
                image: "pine-nuts.png",
              },
              {
                id: 11297,
                name: "parsley",
                localizedName: "parsley",
                image: "parsley.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 8,
            step: "Saute for 3-4 minutes for flavors to combine and absorb into the orzo.",
            ingredients: [
              {
                id: 10920420,
                name: "orzo",
                localizedName: "orzo",
                image: "orzo.jpg",
              },
            ],
            equipment: [],
            length: {
              number: 4,
              unit: "minutes",
            },
          },
          {
            number: 9,
            step: "Remove from heat.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 10,
            step: "In a large bowl, combine cucumber, green bell pepper, cherry tomatoes, red onion and pepperoncinis to orzo mixture.",
            ingredients: [
              {
                id: 11333,
                name: "green pepper",
                localizedName: "green pepper",
                image: "green-pepper.jpg",
              },
              {
                id: 10311529,
                name: "cherry tomato",
                localizedName: "cherry tomato",
                image: "cherry-tomatoes.png",
              },
              {
                id: 11976,
                name: "peperoncini",
                localizedName: "peperoncini",
                image: "pepperoncini.jpg",
              },
              {
                id: 10011282,
                name: "red onion",
                localizedName: "red onion",
                image: "red-onion.png",
              },
              {
                id: 11206,
                name: "cucumber",
                localizedName: "cucumber",
                image: "cucumber.jpg",
              },
              {
                id: 10920420,
                name: "orzo",
                localizedName: "orzo",
                image: "orzo.jpg",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
              },
            ],
          },
          {
            number: 11,
            step: "Additionally add crumbled feta cheese, red wine vinegar and remaining six tablespoons of EVOO.",
            ingredients: [
              {
                id: 1022068,
                name: "red wine vinegar",
                localizedName: "red wine vinegar",
                image: "red-wine-vinegar.jpg",
              },
              {
                id: 1019,
                name: "feta cheese",
                localizedName: "feta cheese",
                image: "feta.png",
              },
              {
                id: 1034053,
                name: "extra virgin olive oil",
                localizedName: "extra virgin olive oil",
                image: "olive-oil.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 12,
            step: "Mix well. Can be refrigerated or served immediately.",
            ingredients: [],
            equipment: [],
          },
        ],
      },
    ],
    originalId: null,
    spoonacularScore: 84.87767791748047,
    spoonacularSourceUrl:
      "https://spoonacular.com/mediterranean-orzo-salad-651426",
  };
  //   const { id } = useParams();

  //   async function fetchdata() {
  //     const data = await axios.get(`${url}/${id}/information`, {
  //       params: {
  //         apiKey: apikey,
  //       },
  //     });
  //     await console.log(data);
  //   }

  // fetchdata();

  return (
    <>
    {(!invisible) && ( <div className="absolute bg-zinc-700/60 h-screen w-screen z-20 backdrop-blur-lg flex justify-center items-center">
      <img className="rounded-md" src={data.image} alt="" />
      <img 
      onClick={()=> setinvisible(true)}
      className="w-24 hover:scale-105 hover:cursor-pointer absolute z-30 my-2 right-0 mx-4 top-0" src={close} alt="" />
    </div>)
    }
      <Navbar />
      <div
        onClick={() => setinvisible(false)}
        className=" shadow-black transition-all hover:shadow-md hover:cursor-pointer  fixed h-[85%] w-[35%] object-contain object-center m-3 rounded-lg "
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundSize: "cover", // Cover the entire div
          backgroundPosition: "center", // Center the background image
        }}
      >
        
      </div>
      <div>
        
      </div>
    </>
  );
};

export default Recipe;
