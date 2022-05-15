import { Injectable } from "@angular/core";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Data } from "src/main/_models/data.model";
import { Settings } from "src/main/_models/settings.model";

@Injectable()

export class AppService {

  constructor() {
    initializeApp(environment.firebase);
  }

  getAll(): Observable<Data[]> {
    return this.toObservable('demo')
  }

  getSettings(): Observable<Settings[]> {
    return this.toObservable('settings')
  }

  toObservable(collectionName: string) { // simple conversion to Observable
    const subject = new BehaviorSubject([]);
    const collectionRef = collection(getFirestore(), collectionName);
    onSnapshot(collectionRef, (snapshot: any) => { subject.next(snapshot.docs) });
    return subject.asObservable()
  }

}