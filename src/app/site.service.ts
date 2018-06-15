import { Injectable } from '@angular/core';
import { Site } from './models/site.model';
import { SITES } from './mock-sites';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SiteService {
  sites: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
 this.sites = database.list('sites');
}

getServices() {
  return this.sites;
}

addService(newService: Site) {
  this.sites.push(newService);
}

getSiteById(siteId: string){
  return this.database.object('/sites/' + siteId);
}

updateSite(localUpdatedSite) {
  var siteEntryInFirebase = this.getSiteById(localUpdatedSite.$key);
  siteEntryInFirebase.update({firstName: localUpdatedSite.firstName, lastName: localUpdatedSite.lastName, age: localUpdatedSite.age});
}

deleteSite(localSiteToDelete) {
  var siteEntryInFirebase = this.getSiteById(localSiteToDelete.$key);
  siteEntryInFirebase.remove();
}
}
