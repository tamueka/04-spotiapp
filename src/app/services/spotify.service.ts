import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify service iniciado")
   }

   getQuery( query: string ){
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCovcE_3cKQOz1MyP12f5iDUL13aE03UhtH_MRQx9LOUgLLE16XjTgcS1LLpl5LCccs8bcogFgqBlRq9VQ'
    })

    return this.http.get(url, { headers });
  }

   getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data => data['albums'].items))

   }

   getArtista(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
               .pipe( map( data => data['artists'].items))
   }
}
