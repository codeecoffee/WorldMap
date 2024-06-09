import { Component } from '@angular/core';
import { CountryInfoService } from '../country-info.service';
import { response } from 'express';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [CountryInfoService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  countryInfo: any = {};
  originalColor = 'white'; // Default color of the SVG paths
  hoverColor = '#FFC857'; // Color when hovered

  constructor(private dataService: CountryInfoService) {}

  onClick(event: MouseEvent): void {
    const target = event.target as SVGPathElement;
    const id = target.id;
    if (id) {
      this.dataService.getDataById(id).subscribe((response) => {
        this.countryInfo = response;
        // console.log(this.countryInfo)
      });
    }
  }

  
}
