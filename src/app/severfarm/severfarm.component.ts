import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-severfarm',
  templateUrl: './severfarm.component.html',
  styleUrls: ['./severfarm.component.css']
})
export class SeverfarmComponent implements OnInit {


  @Input()
  customTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

  // String Interpolation Method
  title = "This is  the server farm!";

  // Property Binding
  data = "Deadspace is a great game!";

  // Event Binding
  name = "johnny";

  changeName(){
    this.name="Muggu";
  }

}
