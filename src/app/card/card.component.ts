import { Component, Input, OnInit } from '@angular/core';
import { Media } from '../store/models/anime-data';

@Component({
  selector: 'anime-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() animeData: Media | undefined;

  constructor() {}

  ngOnInit(): void {}
}
