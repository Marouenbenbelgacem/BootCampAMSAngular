import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  provider: any;
  username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');
  providerUrl = environment.providerUrl;

  constructor(private http: HttpClient) {
  }

  listProviders() :any {

    // cette partie est concernant le basic auth logic its is hard coded
    /*const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    return this.http.get(this.providerUrl + '/list', {headers}); */

    // cette partie est utlise par l'intercepteur
    return this.http.get(this.providerUrl + '/list');
    //return this.http.get<Provider[]>(this.providerUrl + '/list');

  }

  createProvider(myform: any) {

    //const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});

    this.provider = {

      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAddress

    };
    //return this.http.post(this.providerUrl + '/add', this.provider, {headers});
    return this.http.post(this.providerUrl + '/add', this.provider);

  }

  updateProvider(myObj: any) {

    //const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});

    //return this.http.put(this.providerUrl + '/' + myObj['id'], myObj, {headers})

    return this.http.put(this.providerUrl + '/' + myObj['id'], myObj)
  }

  deletePovider(id: number) {
   // const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    //return this.http.delete(this.providerUrl + '/' + id,{headers})

    return this.http.delete(this.providerUrl + '/' + id)

  }

  getProvider(id: number): any {
   // const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
    //return this.http.get(this.providerUrl + '/' + id, {headers})
    return this.http.get(this.providerUrl + '/' + id)


  }

}
