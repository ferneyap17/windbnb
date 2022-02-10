import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() showFilterEvent: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() searchInfo: any;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFilter() {
    this.showFilterEvent.emit(true)
  }
}
