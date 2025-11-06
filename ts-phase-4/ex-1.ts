interface IMessenger {
  send(message: string): void;
}

interface ILogger {
  log(message : string) : void;
}

class EmailMessenger implements IMessenger {
  send(message: string): void {
    console.log(`EmailMessenger: ${message}`);
  }
}

class SMSMessenger implements IMessenger {
  send(message: string): void {
    console.log(`SMSMesseger: ${message}`);
  }
}

class Logger implements ILogger {
  log(message : string) : void {
    console.log(`Logger: ${message}`)
  }
}

class NotificationService {
  private messenger : IMessenger
  private logger : ILogger
  constructor(messenger : IMessenger, logger : ILogger) {
    this.messenger = messenger
    this.logger = logger
  }

  notify (message : string) : void {
    this.messenger.send(message)
    this.logger.log("notification sent.")
  }
}

const emailMessenger = new EmailMessenger();
const smsMessenger = new SMSMessenger();
const logger = new Logger();

const emailNotifier = new NotificationService(emailMessenger, logger);
const smsNotifier = new NotificationService(smsMessenger, logger);

emailNotifier.notify("System check complete.");
smsNotifier.notify("Server rebooted successfully.");