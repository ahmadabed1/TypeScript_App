export class Logger {
  // Singleton instance of the Logger class.
  private static instance: Logger;
  // Minimum logging level for this logger instance.
  private level: string;
  // Map of logging levels to their respective numeric values.
  private levels: Record<string, number> = {
    debug: 0, // Debug logging level.
      info: 1, // Info logging level.
      warn: 2, // Warning logging level.
      error: 3, // Error logging level.
  };

  // Private constructor to prevent instantiation from outside the class.
  private constructor(level: string) {
    this.level = level;
  }

  // Static method to get the Singleton instance of the Logger class.
  public static getInstance(level: string): Logger {
    if (!Logger.instance) {
      // If the Singleton instance doesn't exist, create it.
      Logger.instance = new Logger(level);
    }
    // Return the Singleton instance.
    return Logger.instance;
  }

  // Log a message at the given level, if it's not below the minimum logging level.
  public log(level: string, message: string) {
    if (this.levels[level] < this.levels[this.level]) {
      // If the logging level of this message is lower than the minimum logging level, don't log it.
      return;
    }
    // Otherwise, log the message to the console.
    console.log(`[${level.toUpperCase()}] ${message}`);
  }

  // Log a message at the 'debug' level.
  public debug(message: string) {
    this.log("debug", message);
  }

  // Log a message at the 'info' level.
  public info(message: string) {
    this.log("info", message);
  }

  // Log a message at the 'warn' level.
  public warn(message: string) {
    this.log("warn", message);
  }

  // Log a message at the 'error' level.
  public error(message: string) {
    this.log("error", message);
  }
}
