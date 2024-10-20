#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getIcon, getWeather } from './services/api.servise.js';
import { printError, printHelp, printSucces, printWeather } from './services/log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('There is no token');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSucces('Token is saved');
  } catch (error) {
    printError(e.message);
  }
}

const saveCity = async (city) => {
  if (!city.length) {
    printError('There is no token');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSucces('City is saved');
  } catch (error) {
    printError(e.message);
  }
}

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
    const weather = await getWeather(city);
    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (error) {
    if (error.response?.status === 404) {
      printError('Wrong city')
    } else if (error.response?.status === 401) {
      printError('Wrong token')
    } else {
      printError(error.message);
    }
  }
}

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }

  if (args.s) {
    return saveCity(args.s);
  }

  if (args.t) {
    return saveToken(args.t);
  }

  getForcast();
};

initCLI();
