import { Component, Input, OnInit } from '@angular/core';
import { StaysService } from '../../services/stays.service';

@Component({
  selector: 'app-counter',
  template: `
    <div class="flex flex-col gap-1 p-2">
      <span class="font-bold">{{title}}</span>
      <span class="font-normal">{{subTitle}}</span>
      <div class="flex items-center gap-4">
        <button
          class="cursor-pointer border-2 px-2 rounded"
          (click)="decreaseGuest()"
        >
          -
        </button>
        <span>{{ guests }}</span>
        <button
          class="cursor-pointer border-2 px-2 rounded"
          [disabled]="disabledButtons"
          (click)="increaseGuest()"
        >
          +
        </button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class CounterComponent implements OnInit {
  @Input() title = '';
  @Input() subTitle = '';
  @Input() disabledButtons = false;

  guests = 0;

  constructor(private staysService: StaysService) { }

  ngOnInit(): void {
  }

  increaseGuest(): void {
    this.guests++;
    this.emitGuest(1);
  }

  decreaseGuest(): void {
    if (this.guests > 0) {
      this.guests--;
      this.emitGuest(-1);
    }
  }

  emitGuest(value: number): void {
    this.staysService.counter.next(value);
  }
}
