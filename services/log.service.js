import chalk from 'chalk';
import dedent from 'dedent-js';

export const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + ' ', error);
}

export const printSucces = (message) => {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ', message);
}

export const printHelp = () => {
  console.log(dedent`
    ${chalk.bgCyan(' HELP ')}
    without params - show weather
    -s [CITY] to set the city
    -h for help
    -t [API_KEY] to save token
  `);
}
