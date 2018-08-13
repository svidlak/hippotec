import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class FlowersServiceService {
  private readonly GET_FLOWERS: string = 'http://localhost:3000/getFlowers';
  private readonly GET_TRANSLATES: string = 'http://localhost:3000/getTranslate';

  constructor(private http: HttpClient) {
  }

  async getFlowersList() {
    let response;
    try {
      response = await this.http.get(this.GET_FLOWERS).toPromise();

    } catch (err) {
      return Promise.reject(err);
    }
    return response;
  }

  async getTranslates(){
    let response;
    try {
      response = await this.http.get(this.GET_TRANSLATES).toPromise();

    } catch (err) {
      return Promise.reject(err);
    }
    return response;
  }
}
