const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let profile = {};
rl.question("What's your name? ", (name) => {
  profile.name = name;

  rl.question("What's an activity you like doing?  : ", (activity) => {
    profile.activity = activity;

    rl.question("What do you listen to while doing that?   :", (listen) => {
      profile.listen = listen;
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)  :",
        (meal) => {
          profile.meal = meal;
          rl.question("What's your favourite thing to eat for that meal? : " ,(favourite) =>{
            profile.favourite =favourite
            rl.question("Which sport is your absolute favourite?" ,(sport) =>{
              profile.sport= sport;
              rl.question("What is your superpower? In a few words, tell us what you are amazing at! : " ,(superpower) =>{
                profile.superpower = superpower;


                console.log(`i'm  ${profile.name} i like ${profile.activity} 
                `);
                rl.close()
              }
              )
            })
          })

  

        }
      );
    });
  });
});
