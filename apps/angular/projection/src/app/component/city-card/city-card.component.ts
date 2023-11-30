import { Component, OnInit } from '@angular/core';
import { ListItemComponent } from '../../ui/list-item/list-item.component';
import { CardComponent } from '../../ui/card/card.component';
import {
  FakeHttpService,
  randomCity,
} from '../../data-access/fake-http.service';
import { CityStore } from '../../data-access/city.store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  standalone: true,
  imports: [CardComponent, ListItemComponent, AsyncPipe],
})
export class CityCardComponent implements OnInit {
  cities$ = this.store.cities$;

  constructor(
    private http: FakeHttpService,
    private store: CityStore,
  ) {}

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((c) => this.store.addAll(c));
  }

  addNewCity() {
    this.store.addOne(randomCity());
  }

  deleteCity(id: number) {
    this.store.deleteOne(id);
  }
}
