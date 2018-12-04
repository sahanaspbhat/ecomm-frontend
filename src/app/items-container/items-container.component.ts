import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent implements OnInit {


  constructor() {} 
  @Input() items;
  ngOnInit(){}
}

