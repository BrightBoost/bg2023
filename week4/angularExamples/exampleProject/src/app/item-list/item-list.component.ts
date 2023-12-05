import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnChanges {

  @Input() items!: any[];
  @Input() filterText!: string;
  @Input() sortField!: string;
  @Input() sortOrder!: string;

  filteredItems!: any[];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items'] || changes['filterText'] ||
      changes['sortField'] || changes['sortOrder']) {
      this.filteredItems = this.filterAndSortItems(this.items,
        this.filterText, this.sortField, this.sortOrder);
    }
  }

  private filterAndSortItems(items: any[], filterText: string,
    sortField: string, sortOrder: string): any[] {
    let filteredItems = items;
    if (filterText) {
      filteredItems = filteredItems.filter(item =>
        item.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -
        1);
    }
    if (sortField && sortOrder) {
      filteredItems = filteredItems.sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];
        if (aValue > bValue) {
          return sortOrder === 'asc' ? 1 : -1;
        } else if (aValue < bValue) {
          return sortOrder === 'asc' ? -1 : 1;
        } else {
          return 0;
        }
      });
    }
    return filteredItems;
  }

}
