import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  setDoc
} from '@angular/fire/firestore';
import { Desvios } from '../model/desvio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesviosService {


  private db = inject(Firestore);

  constructor() {}
  list() {
    let $desviosRef = collection(this.db, 'desvios');
    return collectionData($desviosRef, {
      idField: 'id',
    }) as Observable<Desvios>;
  }

  findOne(id: string) {
    let $desviosRef = doc(this.db, 'desvios/' + id);
    return docData($desviosRef, {
      // idField: 'id',
    }) as Observable<Desvios>;
  }
  delete(id: string) {
    let $desviosRef = doc(this.db, 'desvios/' + id);
    return deleteDoc($desviosRef);
  }
  add(desvios: Desvios) {
    let $desviosRef = collection(this.db, 'desvios');
    return addDoc($desviosRef, desvios);
  }
  update(desvios: Desvios, id: string) {
    let $desviosRef = doc(this.db, 'desvios/' + id);
    return setDoc($desviosRef, desvios);
  }
}
