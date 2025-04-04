import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';

export type HttpCallOptions = {
  /**
   * If true tells system not send to main http erro hadler
   */
  dontSendAlert?: boolean
} 

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private HTTP_cLIENT = inject(HttpClient)

  constructor() { }

  httpCall<T>(path: string[], queryMaps?: {[key: string]: string | boolean}, opt?: HttpCallOptions){
    const parsedPath = this.urlDresser(path)

    if(queryMaps){
      parsedPath.concat(this.queryDresser(queryMaps))
    }

    return {
      get: () => {
        return this.HTTP_cLIENT.get<T>(parsedPath)
        .pipe(catchError(err => {  

          if(!opt?.dontSendAlert){
              // Run Dialog Modal Service
          }

          return of(undefined)
        }))
      },

      post: (body: any) => {
        return this.HTTP_cLIENT.post<T>(parsedPath, body)
        .pipe(catchError(err => {  

          if(!opt?.dontSendAlert){
              // Run Dialog Modal Service
          }

          return of(undefined)
        }))
      },
    }
  }

  private urlDresser(path: string[]){
    return `${enviroment.apiUrl} ${path.join("/")}`
  }

  private queryDresser(queryMap: {[key: string]: string | boolean}){
    let result = ""

    const entries = Object.entries(queryMap)

    for (let i = 0; i < entries.length; i++) {
      const [key, value] = entries[i];
     
      if(i == 0)
        result += `?${key}=${value}`
      else if(i < entries.length - 1)
        result += `&${key}=${value}&`
      else
        result += `${key}=${value}`
    }

    return result
  }
}
