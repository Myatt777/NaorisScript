import chalk from 'chalk';

const banner = () => {
  const text = `
  _  ____  __ _   _  ____  
 | |/ /  \\/  | \\ | |/ __ \\ 
 | ' /| \\  / |  \\| | |  | |
 |  < | |\\/| | . \` | |  | |
 | . \\| |  | | |\\  | |__| |
 |_|\\_\\_|  |_|_| \\_|\\____/ 
  `;

  const separator = "═".repeat(60);
  return `${chalk.cyan(text)}\n${chalk.white(separator)}`;
};

export default banner;

