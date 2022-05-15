# AngularFirebaseTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Steps

### GitHub

new repository

### Firebase

`<link>` <http://console.firebase.google.com>

1. new project (disabled google analytics)
2. new app web
```javascript
	const firebaseConfig = {
		apiKey: "AIzaSyDvCBriOkn2VtigtOeiqm-ix31-1TH6u38",
		authDomain: "github-eksagono.firebaseapp.com",
		projectId: "github-eksagono",
		storageBucket: "github-eksagono.appspot.com",
		messagingSenderId: "860421243193",
		appId: "1:860421243193:web:773869d6d1c1edbc7068e8"
	};
```
3. Firestore Database
	1. Create database
	2. Start in test mode
	3. Create collection: demo/documentId/field:boolean = true

### VSC

`ng new angular-firebase-template`

`git remote add origin https://github.com/eksagono/angular-firebase-template.git`

`git push -u origin master`

`npm install firebase`

`firebase init`

1. Firestore
2. Use an existing project

environment files

```javascript
export const environment = {
	...
	firebase: {
		apiKey: "AIzaSyDvCBriOkn2VtigtOeiqm-ix31-1TH6u38",
		authDomain: "github-eksagono.firebaseapp.com",
		projectId: "github-eksagono",
		storageBucket: "github-eksagono.appspot.com",
		messagingSenderId: "860421243193",
		appId: "1:860421243193:web:773869d6d1c1edbc7068e8"
	}
};
```

tsconfig.json

```javascript
"strictPropertyInitialization": false // too cumbersome without
```

ngrx (store)

`ng add @ngrx/store@latest`

`ng add @ngrx/effects@latest`

`ng add @ngrx/store-devtools@latest`

data structure

	src
		/main
			/_models
			/_services
			/_store
				/actions
				/effects
				/reducers
				/selectors
			/components

`ng generate component root`

move to folder components

	src
		/app
			app.module.ts
			app.component.html
			app-routing.module.ts
		/main
			/_models
				data.model.ts
				settings.model.ts
			/_services
				_app.service.ts
			/_store
				/actions
					index.ts
					data.actions.ts
					settings.actions.ts
				/effects
					data.effects.ts
					settings.effects.ts
				/reducers
					index.ts
					data.reducer.ts [not used kept for legacy]
				/selectors
					index.ts
					data.selectors.ts
					settings.selectors.ts
			/components
				/root
					root.component.ts
					root.component.html

`ng s` to load a virtual server

page should display:

```html
	root works!

	[ { "field": true, "uid": "Klyz2yjuT0YFzuuV6lU9" } ]
```