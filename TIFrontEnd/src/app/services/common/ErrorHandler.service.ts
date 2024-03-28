import { Injectable } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs';

@Injectable()
export class ErrorHandler {

    handleError(error: HttpErrorResponse){
        if (error.status=== 0){
            //client side or network error occurred
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessuful response code
            // The response body may contain clues as to what went wrong
            console.error(
                `Backend returned code ${error.status}, body was:`, error.error
            );
        }
        // Return an observalbe with a user-facing error message
        return throwError(() => new Error ('Something bad happened; please try again later.'));
    }
    

}