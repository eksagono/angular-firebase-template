import { Injectable } from "@angular/core";
import { getFirestore, collection, onSnapshot } from "@firebase/firestore";
import { BehaviorSubject, Observable } from "rxjs";
import { Model } from "../_models/model.model";

@Injectable()

export class AppService {

  constructor() { }

  getAll(): Observable<Model[]> { // simple conversion to Observable
    const subject = new BehaviorSubject([]);
    const collectionRef = collection(getFirestore(), 'demo');
    onSnapshot(collectionRef, (snapshot: any) => { subject.next(snapshot.docs) });
    return subject.asObservable()
  }

}