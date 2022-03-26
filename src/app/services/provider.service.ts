import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Provider} from "../model/provider.model";

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  provider: any;
  providerUrl = environment.providerUrl;

  constructor(private http: HttpClient) {
  }

  listProviders() {

    return this.http.get<Provider[]>(this.providerUrl + '/list');

  }

  createProvider(myform:any){
  this.provider ={

    'name':myform.value.providerName,
    'email':myform.value.providerEmail,
    'address':myform.value.providerAddress

  };
  return this.http.post(this.providerUrl +'/add', this.provider);


  }

  updateProvider(myObj:any){

    return this.http.put(this.providerUrl + '/' + myObj['id'], myObj)

  }

  deletePovider(id:number){
    return this.http.delete(this.providerUrl + '/' + id)
  }

  getProvider(id:number):any {

    return this.http.get(this.providerUrl + '/' + id)

  }

}
