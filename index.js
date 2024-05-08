import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.green("\n\t\"Welcome To Currency Converter\""));
console.log(chalk.magenta("=".repeat(50)));
const currencyrate = {
    "United States Dollar": 1, // Base Currency is USD
    "Euro": 0.93,
    "Chinese Yuan": 7.24,
    "Pound sterling": 0.79,
    "Australian Dollar": 1.51,
    "Canadian Dollar": 1.37,
    "Thai Baht": 36.80,
    "Turkish lira": 32.35,
    "Saudi Riyal": 3.75,
    "Qatari Riyal": 3.64,
    "Pakistani Rupees": 277.42,
    "Indian Rupees": 83.38,
};
let converter = await inquirer.prompt([
    {
        name: "Fromcurrency",
        message: chalk.yellow("Which currency would you like to convert from."),
        type: "list",
        choices: ["United States Dollar", "Euro", "Chinese Yuan", "Pound sterling", "Australian Dollar", "Canadian Dollar", "Thai Baht", "Turkish lira", "Saudi Riyal", "Qatari Riyal", "Pakistani Rupees", "Indian Rupees"]
    },
    {
        name: "Tocurrency",
        message: chalk.green("Which currency would you like to convert into."),
        type: "list",
        choices: ["United States Dollar", "Euro", "Chinese Yuan", "Pound sterling", "Australian Dollar", "Canadian Dollar", "Thai Baht", "Turkish lira", "Saudi Riyal", "Qatari Riyal", "Pakistani Rupees", "Indian Rupees"]
    },
    {
        name: "amount",
        message: chalk.blue("Enter the amount you want to convert."),
        type: "number"
    }
]);
let fromAmount = currencyrate[converter.Fromcurrency];
let toAmount = currencyrate[converter.Tocurrency];
let Amount = converter.amount;
let baseAmount = Amount / fromAmount;
let convertCurrency = baseAmount * toAmount;
console.log(chalk.magenta("=".repeat(50)));
console.log(`${chalk.red(converter.amount)} ${chalk.yellow(converter.Fromcurrency)} = ${chalk.red(convertCurrency.toFixed(2))} ${chalk.yellow(converter.Tocurrency)}.`);
console.log(chalk.magenta("=".repeat(50)));
