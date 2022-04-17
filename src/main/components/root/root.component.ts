import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Data } from 'src/main/_models/data.model';
import { DataActions } from 'src/main/_store/actions';
import { AppState } from 'src/main/_store/reducers';
import { DataSelectors } from 'src/main/_store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, OnDestroy {

  data$: Observable<Data[]> = this.store.pipe(select(DataSelectors.listData));

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(DataActions.LoadData());
  }
  
  ngOnDestroy(): void {
    this.store.dispatch(DataActions.StopLoadData());
  }

}
