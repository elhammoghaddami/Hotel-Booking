import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //#region : Constructor
  constructor(private http: HttpClient) {}
  //#endregion

  //#region : General Methods
  postGeneral(data, url) {
    return this.http.post<any>(url, data);
  }

  putGeneral(data, url) {
    return this.http.put<any>(url, data);
  }

  putGeneralById(id, data, url) {
    return this.http.put<any>(url + '/' + id, data);
  }

  deleteGeneral(data, url) {
    let queryString = '';
    let i = 0;
    for (const key in data) {
      if (key) {
        if (!i) {
          queryString = '?' + key + '=' + data[key];
        } else {
          queryString = queryString + '&' + key + '=' + data[key];
        }
        i++;
      }
    }
    for (const key in data) {
      if (key) {
        queryString = queryString + '&' + key + '=' + data[key];
      }
    }
    return this.http.request('delete', url, { body: data });
    // return this.http.delete<any>(url + queryString);
  }

  deleteGeneralById(id, url) {
    return this.http.delete<any>(url + '/' + id);
  }

  getGeneral(data, url) {
    let queryString = '';
    let i = 0;
    for (const key in data) {
      if (key && data[key]) {
        if (!i) {
          queryString = '?' + key + '=' + data[key];
        } else {
          queryString = queryString + '&' + key + '=' + data[key];
        }
        i++;
      }
    }
    return this.http.get<any>(url + queryString);
  }

  findGeneral(id, url) {
    return this.http.get(url + '/' + id);
  }
  //#endregion

  //#region : Get Menus
  getMenus() {
    return this.getGeneral({}, '/group/menu');
  }
  //#endregion
}
