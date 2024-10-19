#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printError, printHelp, printSucces } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
  try {
    await saveKeyValue(token);
    printSucces('Token is saved');
  } catch (error) {
    printError(e.message);
  }
}

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }

  if (args.s) {
    // save city
  }

  if (args.t) {
    return saveToken('token', args.t);
  }

  // show weather
};

initCLI();
