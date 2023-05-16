const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (listen) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (favouriteThingToEat) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {

              console.log("-----------------------------------");
              console.log("Survey answer -");
              console.log(`Name: ${name}`);
              console.log(`Activity: ${activity}`);
              console.log(`Listen: ${listen}`);
              console.log(`Favourite meal: : ${meal}`);
              console.log(`Favourite thing to eat: ${favouriteThingToEat}`);
              console.log(`Favourite sport: ${sport}`);
              console.log(`Your superpower: ${superpower}`);

              //close function for input
              rl.close();

            });
          });
        });
      });
    });
  });
});
