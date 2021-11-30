const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question("What's an activity you like doing? ", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.question("What do you listen to while doing that? ", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        
        rl.question("Who is your favourite musician?", (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);

          rl.question("Do you like cats?", (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);

  

  rl.close();
  });
});
});
});
});
});




 
