import {Component, OnInit} from '@angular/core';
import {ProviderService} from "../services/provider.service";
import {Router} from "@angular/router";
import {Provider} from "../model/provider.model";




@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit {

  providers: Provider[]=[];


  constructor(private providerServ: ProviderService, private router: Router) {
  }

  ngOnInit(): void {
    this.refreshListProviders();
  }

  deleteProvider(id:number) {
    if(window.confirm('Are sure you want to delete this item ?')){ this.providerServ.deletePovider(id).subscribe(
      response=> {
      this.refreshListProviders();
    }
  );}
  }

  refreshListProviders() {
    this.providerServ.listProviders().subscribe(response => {
      console.log(response)
      this.providers = response;
    });
  }

  updateProvider(myObj: any) {
    this.router.navigate(['updateProvider' + '/' + myObj['id']]);
  }

}

