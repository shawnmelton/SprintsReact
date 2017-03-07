import appConfig from '../config.js';

class Logger {
    _getDepthTabs(depth) {
        return String("\t").repeat(depth);
    }

    _parseLogMessage(logMessage, depth) {
        try {
            if (logMessage instanceof Array) {
                let concatLogMessage = '';
                for (let logMessageItem of logMessage) {
                    concatLogMessage += "\n"+ this._getDepthTabs(depth) + this._parseLogMessage(logMessageItem, depth + 1);
                }

                return concatLogMessage;
            } else if (typeof logMessage === 'object') {
                let concatLogMessage = '';
                for (var logMessageKey in logMessage) {
                    concatLogMessage += "\n"+ this._getDepthTabs(depth) + logMessageKey +': '+ 
                        this._parseLogMessage(logMessage[logMessageKey], depth + 1);
                }

                return concatLogMessage;
            }

            // Assuming its a string.
            return "\n"+ this._getDepthTabs(depth) + logMessage;
        } catch (error) {
            console.error(error);
        }
    }

    _sendLogMessage(shouldSendLog, logMessage, sendLogFunc) {
        if (shouldSendLog) {
            sendLogFunc(
                this._parseLogMessage(logMessage, 0)
            );
        }
    }

    error(message) {
        this._sendLogMessage(appConfig.logging.showErrors, message, console.error);
    }

    log(message) {
        this._sendLogMessage(appConfig.logging.showGeneric, message, console.log);
    }

    warn(message) {
        this._sendLogMessage(appConfig.logging.showWarnings, message, console.warn);
    }
}

let logger = new Logger();
export default logger;