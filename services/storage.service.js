import os from 'os';
import path from 'path';

const filePath = path.join(os.homedir(), 'weather-data.json');

export const saveKeyValue = (key, value) => {
  console.log(filePath);  
}
