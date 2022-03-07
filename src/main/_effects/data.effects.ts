import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, takeUntil } from "rxjs";
import { AppService } from "src/main/_services/_app.service";
import { DataActions } from "src/main/_store/actions";

@Injectable()

export class DataEffects {
  constructor(
    private actions$: Actions,
    private AppService: AppService,
  ) { }

  LoadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.LoadData),
      switchMap(() =>
        this.AppService.getAll().pipe(
          takeUntil(
            this.actions$.pipe(
              ofType(DataActions.StopLoadData)
            )
          ),
          map((result: any) => {
            return DataActions.LoadDataSuccess({
              data: result.map((data: any) => ({ ...data.data(), uid: data.id }))
            })
          })
        )
      )
    )
  )
}