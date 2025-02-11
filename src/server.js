
import app from './app.js';
import chalk from 'chalk';
import { PORT } from './config/env.js';
import connectDB from './database/db.js';
import logger from './logger/winston.logger.js';


/**
 * Starting from Node.js v14 top-level await is available and it is only available in ES modules.
 * This means you can not use it with common js modules or Node version < 14.
 */
const majorNodeVersion = +process.env.NODE_VERSION?.split(".")[0] || 0;



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

if (majorNodeVersion >= 14) {
    try {
        await connectDB();
        startServer();
    } catch (err) {
        logger.error("Mongo db connect error: ", err);
    }
} else {
    connectDB()
        .then(() => {
            startServer();
        })
        .catch((err) => {
            logger.error("Mongo db connect error: ", err);
        });
}
