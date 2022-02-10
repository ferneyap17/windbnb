import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { StaysService } from '../../services/stays.service';
import { Subscription } from 'rxjs';

const MAX_GUESTS = 10;

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit, OnDestroy {
  @Input() cities: String[] = [];
  @Output() showFilterEvent: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() onSearch: EventEmitter<any> = new EventEmitter<any>()

  totalGuests = 0;
  selectedCity = 'Helsinki, Finland';
  subscriptionCounter!: Subscription;

  constructor(private staysService: StaysService) { }

  ngOnInit(): void {
    this.subscriptionCounter = this.staysService.counter.subscribe({
      next: (number) => {
        if(this.totalGuests <= MAX_GUESTS) {
          this.totalGuests += number;
        }
    }});
  }

  closeFilter(): void {
    this.showFilterEvent.emit(false);
  }

  selectCity(city: any): void {
    this.selectedCity = city;
  }

  searchStays(): void {
    const city = this.selectedCity.split(',')[0]
    this.onSearch.emit({
      city,
      totalGuests: this.totalGuests
    })
    this.closeFilter();
  }

  get disabledButtonsCounter(): boolean {
    return this.totalGuests >= MAX_GUESTS;
  }

  ngOnDestroy() {
    this.subscriptionCounter.unsubscribe();
  }
}
