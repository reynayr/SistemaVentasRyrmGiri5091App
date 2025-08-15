import { Injectable } from '@angular/core';

export interface Item {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[] = [
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' }
  ];

  getItems(): Item[] {
    return this.items;
  }

  addItem(name: string) {
    const newItem: Item = {
      id: this.items.length + 1,
      name
    };
    this.items.push(newItem);
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }
}
