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
      'Authorization': 'Bearer BQCDi1jyKR0BpH8r9V1DqlHCiQdBwhoU5SoOFYQZ7TUQ-tuO2tE4EVyw2eDHUwdVqsuy5S-RaHIcV6D_hSE'
    })

    return this.http.get(url, { headers });
  }

   getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data => data['albums'].items))

   }

   getArtistas(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
               .pipe( map( data => data['artists'].items))
   }

   getArtista(id: string){

    return this.getQuery(`artists/${id}`);
   }
}
