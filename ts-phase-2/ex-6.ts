  // Abstract Class Logger

  // Method log(message: string): void that calls:

  // this.openConnection()

  // this.writeMessage(message)

  // this.closeConnection()

  // openConnection() and closeConnection() should be protected abstract methods.

  // writeMessage(message: string) should be protected abstract as well.

  // Subclass FileLogger

  // Implements each step with console.log messages like "Opening file...", "Writing to file: ...".

  // Subclass CloudLogger

  // Implements each step with messages like "Connecting to cloud...", "Uploading log: ...".

  // Create both loggers and call:

  // fileLogger.log("System started");
  // cloudLogger.log("User logged in");

  abstract class Logger {
    log(message: string): void {
      this.openConnection();
      this.writeMessage(message);
      this.closeConnection();
    }

    protected abstract openConnection(): void;
    protected abstract writeMessage(message: string): void;
    protected abstract closeConnection(): void;
  }

  class FileLogger extends Logger {
    protected openConnection(): void {
      console.log("Opening file...");
    }

    protected writeMessage(message: string): void {
      console.log(`Writing to file: ${message}`);
    }

    protected closeConnection(): void {
      console.log("Closing connection.");
    }
  }

  class CloudLogger extends Logger {
    protected openConnection(): void {
      console.log("Connecting to cloud...");
    }
    protected writeMessage(message: string): void {
      console.log(`Uploading log: ${message}`);
    }

    protected closeConnection(): void {
      console.log("Disconnecting from cloud.");
    }
  }


  const fileLogger = new FileLogger()
  const cloudLogger = new CloudLogger()

  fileLogger.log("System started")
  cloudLogger.log("User logged in")