import { Component, OnInit } from '@angular/core'
import { Connectivity, ObservableArray } from '@nativescript/core';

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: ObservableArray<string>

  constructor(private itemService: ItemService) {

    Connectivity.startMonitoring((c) => {
      console.log("Connectivity Callback", Connectivity.connectionType[c]);
      this.items.push(Connectivity.connectionType[c]);
    });

  }

  ngOnInit(): void {
    this.items = new ObservableArray<string>();
  }
}
