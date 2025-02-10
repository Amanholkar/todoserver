
import app from './app.js';
import chalk from 'chalk';
import { PORT } from './config/env.js';





app.listen(PORT , ()=>{
    console.log(chalk.blueBright(`Server started on port ${PORT}`));
});