import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = '/api/';

  constructor(private httpClient: HttpClient) { }

  public getWorksheedsApi() {
    return this.apiUrl + '/groups'
  }

  public load() {
    return this.httpClient.get(this.getWorksheedsApi())
  }

  getGroups(){
    return this.httpClient.get(this.getWorksheedsApi())
  }

  public get<T>(link) {
    return this.get<T>(link)
  }
}
