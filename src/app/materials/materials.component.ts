import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  materials = ['Box 1', 'Box 2', 'Box 3'];

}
