import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../card/card.component';

import { CardListComponent } from '../card-list/card-list.component';

@NgModule({
  declarations: [CardComponent, CardListComponent],
  imports: [CommonModule],
  exports: [CardComponent, CardListComponent],
})
export class CardModule {}
