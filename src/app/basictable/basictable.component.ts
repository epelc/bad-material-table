import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-basictable',
  templateUrl: './basictable.component.html',
  styleUrls: ['./basictable.component.scss'],
})
export class BasictableComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  data = [
    {
      id: 1,
      price: 20,
      name: 'ed',
    },
    {
      id: 12,
      price: 33320,
      name: 'e2d',
    },
    {
      id: 13,
      price: 2412310,
      name: 'e123d',
    },
  ]
  cols = ['id', 'price', 'name']
}
