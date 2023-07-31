import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON =
  '[{"id":"0001","type":"doughnut","name":"Chocolate Doughnut","price":100,"ingredients":{"method":{"name":"Doughnut","preparation":"Baked"},"Type":{"name":"Chocolate Doughnut","sweetness":"Medium"},"toppings":[{"name":"MILK","quantity":"1/2 tin","ingredients":["Nestle` MILMAID"]},{"name":"Egg","quantity":"2","ingredients":["Egg"]},{"name":"Salt","quantity":"1/2 tablespoon","ingredients":["Salt"]},{"name":"Powdered Sugar","quantity":"3 tablespoons","ingredients":["Powdered Sugar"]},{"name":"Vanilla Essence","quantity":"1 tablespoon","ingredients":["Vanilla Essence"]},{"name":"Floor","quantity":"4 cups","ingredients":["Floor"]},{"name":"Oil","quantity":"250 ml","ingredients":["Oil"]},{"name":"Chocolate","quantity":"200 gms","ingredients":["Dark Chocolate","White Chocolate"]}]}},{"id":"0002","type":"icecream","name":"IceCream","price":50,"ingredients":{"method":{"name":"IceCream","preparation":"Sweet and Cold"},"Type":{"name":"Butter Scotch","sweetness":"Medium"},"toppings":[{"name":"Unsalted Butter","quantity":"2 tablespoons","ingredients":["Amul Butter","Home prepared butter"]},{"name":"Dark Brown Sugar","quantity":"1 cup","ingredients":["Dark Brown Sugar"]},{"name":"Whipping Cream","quantity":"5 cup","ingredients":["Amul Whipping Cream"]},{"name":"Vanilla Extract","quantity":"1 tablespoons","ingredients":["Vanilla Extract"]},{"name":"Condensed Milk","quantity":"1 can","ingredients":["Amul Condensed Milk"]},{"name":"Chocolates","quantity":"1 cup","ingredients":["Chocolate nuts"," chocolaate sprinkles","Chocolate bricks","Cones"]}]}},{"id":"0003","type":"Cake","name":"Chocolate cake","price":500,"ingredients":{"method":{"name":"Cake","preparation":"Baked"},"Type":{"name":"Chocolate Cake","sweetness":"Medium"},"toppings":[{"name":"Floor","quantity":"4 cup","ingredients":["floor"]},{"name":"Sugar","quantity":"1 cup","ingredients":["Powdered Sugar"]},{"name":"Unsweetened Cocoa Powdered","quantity":"1 cup","ingredients":["Cocoa Powder"]},{"name":"Baking powder","quantity":"1 tablespoon","ingredients":["Baking powder"]},{"name":"Baking Soda","quantity":"1 tablespoon","ingredients":["Baking Soda"]},{"name":"MILK","quantity":"5 cup","ingredients":["Dairy Milk"]},{"name":"Oil","quantity":"3 tablespoons","ingredients":["Oil"]},{"name":"Egg","quantity":"2 egg","ingredients":["Egg"]},{"name":"Vanilla Extract","quantity":"3 tablespoon","ingredients":["Vanilla Extract"]},{"name":"Water","quantity":"1 cup","ingredients":["Boiling Water"]}]}}]';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
let data;
app.get("/", (req, res) => {
  res.render("index.ejs",{
    recipe : data
  });
});

app.post("/recipe", (req, res) => {
  //Step 3: Write your code here to make this behave like the solution website.
  switch(req.body.choice){
       case "doughnuts":
        data = JSON.parse(recipeJSON)[0];
        break;
        case "icecream":
          data = JSON.parse(recipeJSON)[1];
          break;
          case "cake":
            data = JSON.parse(recipeJSON)[2];
            break;
    default:
      break;
  }
  res.redirect("/");
  //Step 4: Add code to views/index.ejs to use the recieved recipe object.
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
