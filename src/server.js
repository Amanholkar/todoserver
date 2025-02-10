
import app from './app.js';
import chalk from 'chalk';
import { PORT } from './config/env.js';
import logger from './logger/winston.logger.js';






const startServer = () => {
    app.listen(PORT || 8080, () => {
        logger.info(
            `📑 Visit the documentation at: http://localhost:${
                PORT || 8080
            }`
        );
        logger.info("⚙️  Server is running on port: " + PORT);
    });
};

startServer();
