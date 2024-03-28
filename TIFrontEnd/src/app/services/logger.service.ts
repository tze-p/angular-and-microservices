import { Injectable } from '@angular/core'

@Injectable()
export class LoggerService{

    LogMessage(message: string){
        console.log('Message: ' + message);
    }

}