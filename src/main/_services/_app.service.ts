import { Injectable } from "@angular/core";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Model } from "src/main/_models/model.model";

@Injectable()

export class AppService {

  private firebase = initializeApp(environment.firebase);

  constructor() { }

  getAll(): Observable<Model[]> { // simple conversion to Observable
    const subject = new BehaviorSubject([]);
    const collectionRef = collection(getFirestore(), 'demo');
    onSnapshot(collectionRef, (snapshot: any) => { subject.next(snapshot.docs) });
    return subject.asObservable()
  }

}