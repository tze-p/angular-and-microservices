import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { LoggerService } from "../../logger.service";
import { catchError, map } from "rxjs/operators"
import { AttachedDocumentType } from 'src/app/model/static/AttachedDocumentType';
import { Observable, throwError } from 'rxjs';
import { ErrorHandler } from '../../common/ErrorHandler.service';
import { FilterAttachedDocumentType } from 'src/app/model/static/filter/FilterAttachedDocumentType';

@Injectable()
export class AttachedDocumentTypeService extends ErrorHandler {
  constructor(private logger: LoggerService,
    private http: HttpClient) {
    super();
  }

  private headers = new HttpHeaders().set('access-control-allow-origin', "http://localhost:8080/");

  RetrieveAttachedDocumentTypes(filter: FilterAttachedDocumentType): Observable<AttachedDocumentType[]> {
    //This needs to populate attachDocumentTypes from the DB service
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let params = new HttpParams();
    params = params.append("Code", filter.Code);
    params = params.append("Description", filter.Description);
    params = params.append("Type", filter.Type);

    // console.log(params);

    return this.http.get<{ [key: string]: AttachedDocumentType }>(
      'http://localhost:8000/api/static/AttachedDocumentType',
      { headers: headers, params: params }
    )
      .pipe(
        map((res) => {
          const docTypes = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              docTypes.push({ ...res[key], id: key });
            }

          }
          //console.log('Response receive from API');
          return docTypes;
        }),
        catchError(this.handleError)

      );
  }

  // attachDocumentTypes = [
  //     {code:'BOE', type:'Documents', description:'Bill of exchange' },
  //     {code:'BOL', type:'Documents', description:'Bill of lading' }
  // ];


}