import { Component } from '@angular/core';
import { CountryInfoService } from '../country-info.service';
import { response } from 'express';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers:[CountryInfoService],
  // template: '<p>my App template</p>',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent {
  countryInfo:any ={}
  constructor(private dataService: CountryInfoService) {}

  onClick(event: MouseEvent): void {
    const target = event.target as SVGPathElement;
    const id = target.id;
    // const name = target.;
    if(id){
      this.dataService.getDataById(id).subscribe(response=>{
        this.countryInfo = response
        console.log(this.countryInfo)
      })
    }
  }





}
