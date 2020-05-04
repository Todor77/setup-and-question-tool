import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";


export abstract class CrudService<T> {

  restEndpoint = '/api';
  restPath: string;

  constructor(protected  http: HttpClient, private path) {
    this.restPath = [this.restEndpoint, this.path].join('/');
  }

  getQeustionId(resource) {
    let link = '';
    if (resource.hasOwnProperty('_links')) {
      link = resource['_links'].self.href;
    }
    return link.substring(link.length - 1, link.length);
  }

  getSelfLink(resource) {
    let selfLink = '';
    if (resource.hasOwnProperty('_links')) {
      selfLink = resource['_links'].self.href;
    }
    return selfLink.replace("{?projection}", "");
  }

  getAll<T>(currentPage?, pageSize?, sort?) {
    let requestParams: any = {};
    requestParams.page = currentPage;
    requestParams.size = pageSize;
    return this.executeGetAndUnpackResponse(requestParams);
  }

  getById<T>(id) {
    return this.http.get<T>([this.restPath, id].join('/'));
  }

  create(resource) {
    return this.http.post<T>(this.restPath, resource);
  }

  update(resource) {
    return this.http.put<T>(this.getSelfLink(resource), resource);
  }

  executeGetAndUnpackResponse(requestParams?) {
    return this.http.get<any>(this.restPath, {params: requestParams})
      .pipe(
        map(response => {
          let result = null;

          result = response._embedded[this.path];
          return {
            results: result,
            page: response.page,
            _links: response._links
        };
    }));
  }

  delete<T>(resource) {
    return this.http.delete<T>(this.getSelfLink(resource))
  }

}
