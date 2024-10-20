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

export const printWeather = (res, icon) => {
  console.log(dedent`
    ${chalk.bgYellow(' WEATHER ')} The weather in ${res.name}
    ${icon} ${res.weather[0].description}
    Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
    Humidity: ${res.main.humidity}%
    Wind speed: ${res.wind.speed}
  `);
}
