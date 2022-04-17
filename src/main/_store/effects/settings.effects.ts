import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, takeUntil } from "rxjs";
import { Settings } from "src/main/_models/settings.model";
import { AppService } from "src/main/_services/_app.service";
import { SettingsActions } from "src/main/_store/actions";

@Injectable()

export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private AppService: AppService
  ) { }

  LoadSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActions.LoadSettings),
      switchMap(() =>
        this.AppService.getSettings().pipe(
          takeUntil(
            this.actions$.pipe(
              ofType(SettingsActions.StopLoadSettings)
            )
          ),
          map((result: any) => {
            const effectObj: { settings: Settings } = result.reduce((obj: any, data: any) => {
              // obj[data.id] = { ...data.data() };
              return { settings: data.data() };
            }, {});
            return SettingsActions.LoadSettingsSuccess(effectObj);
          })
        )
      )
    )
  )
}