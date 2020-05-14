import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";


export class CrudService<T> {

  restEndpoint = '/api';
  restPath: string;

  constructor(protected  http: HttpClient, private path, private subResource?: string) {
    if(subResource === undefined) {
      this.restPath = [this.restEndpoint, this.path].join('/');
    } else  {
      this.restPath = [this.getSelfLink(path), this.subResource].join('/');
    }
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

  patch(resource) {
    return this.http.patch<T>(this.getSelfLink(resource), resource);
  }

  executeGetAndUnpackResponse(requestParams?) {
    return this.http.get<any>(this.restPath, {params: requestParams})
      .pipe(
        map(response => {
          let result = null;
          if(typeof this.path === "string") {
            result = response._embedded[this.path];
          } else {
            //if sub resource is a @OneToOne, then there is no _embedded.
            result = response;
          }
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
