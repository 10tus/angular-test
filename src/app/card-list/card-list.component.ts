import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs';
import { AnimeData, Media } from '../store/models/anime-data';
import { GET_TRENDING_DESC } from '../shared/graph-types';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  anime$: Observable<Media[]> | undefined;
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    // lagay mo to sa store bukas
    this.anime$ = this.apollo
      .watchQuery<AnimeData>({
        query: GET_TRENDING_DESC,
        variables: {
          // ^--- this shits to filter graph ql data
          seasonYear: 2022,
          type: 'ANIME',
          sort: 'TRENDING_DESC',
        },
      })
      .valueChanges.pipe(map((res) => res.data.Page.media));
  }
}
