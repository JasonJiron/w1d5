var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
var message2 = "The " + chalk.red("red ") + "is < " + chalk.green("green")

console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

console.log(message);
console.log(message2);

