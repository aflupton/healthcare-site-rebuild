import { Injectable } from '@angular/core';
import { Site } from './models/site.model';
import { SITES } from './mock-sites';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SiteService {
  site: FirebaseListObservable<any>[];

  constructor() { }

}
