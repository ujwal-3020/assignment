const winston = require('winston');
require('winston-daily-rotate-file');

// Configure the Daily Rotate File transport
const transport = new winston.transports.DailyRotateFile({
    filename: 'logs/application-%DATE%.log', // Log file pattern with date
    datePattern: 'YYYY-MM-DD',               // Rotate daily with YYYY-MM-DD pattern
    zippedArchive: true,                     // Compress old log files
    maxSize: '20m',                          // Maximum size of a log file before rotating
    maxFiles: '14d'                          // Keep logs for the last 14 days
});

// Create a custom logger with daily rotating file
const logger = winston.createLogger({
    level: 'info', // Default log level (e.g., 'info', 'error', 'warn', etc.)
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [
        transport,   // Use the daily rotating file transport
        new winston.transports.Console({  // Also log to console
            format: winston.format.combine(
                winston.format.colorize(), // Colorize the console output
                winston.format.simple()
            )
        })
    ]
});

// Usage Example
logger.info('This is an info log message.');
logger.error('This is an error log message.');

// Simulate some log messages for testing
setInterval(() => {
    logger.info('This is a recurring log message.');
}, 1000);