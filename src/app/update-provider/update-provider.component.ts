import {Component, OnInit} from '@angular/core';
import {ProviderService} from "../services/provider.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit {
  id: any;
  providerToUpdate: any;
  name !: string;
  email: any;
  address: any;
  // providerToUpdate:any;
  //public prov :Provider;


  constructor(private providerServ: ProviderService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    /* this.route.paramMap.subscribe(
       params => {

     //    (this.prov.id) = params.get( 'id') ;
         console.log(this.prov.id);
       });
     this.providerToUpdate = this.providerServ.getProvider(this.prov.id).subscribe(
       (response: any) => {
         this.prov.id = response["name"];
         this.prov.email = response["email"];
         this.prov.address = response["address"];
       }
     )*/
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );
    this.providerServ.getProvider(this.id).subscribe(
      response => {
        console.log(response);
        this.name = response["name"];
        this.email = response["email"];
        this.address = response["address"];
      }
    );
  }

  updateProvider() {
    this.providerToUpdate = {
      'name': this.name,
      'email': this.email,
      'address': this.address,
      'id': this.id
    }
    this.providerServ.updateProvider(this.providerToUpdate).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['listProvider']);
      }
    );

  }

}
