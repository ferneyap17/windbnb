import { Component, OnInit } from '@angular/core';
import { StaysService } from './services/stays.service';
import { Stay } from './services/interfaces/cities.interface';

const DEFAULT_CITY = { city: 'Finland',totalGuests: 0 };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'windbnb';
  stays: Stay[] = [];
  showFilter = false;
  cities: string[] = [];
  searchInfo = DEFAULT_CITY;

  constructor(private staysService: StaysService) {
  }

  ngOnInit(): void {
    this.getStays('');
  }

  getStays(search: any): void {
    this.searchInfo = search || DEFAULT_CITY;

    this.staysService.getStays().subscribe({
      next: res => {
        const location = res.map(({city, country}) => `${city}, ${country}`);
        this.cities = [...new Set(location)];

        if (search) {
          this.stays = res.filter(stay => this.staysByCityAndGuests(stay, search));
          return;
        }

        this.stays = res;
      }
    })
  }

  staysByCityAndGuests(stay: Stay, search: any): boolean {
    return stay.city === search.city && stay.maxGuests >= search.totalGuests;
  }
}
