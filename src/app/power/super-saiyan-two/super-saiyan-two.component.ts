import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './super-saiyan-two.component.html',
  styleUrls: ['./super-saiyan-two.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SuperSaiyanTwoComponent implements OnInit {
	@Input() power;
  constructor() { }

  ngOnInit() {
  }

}
