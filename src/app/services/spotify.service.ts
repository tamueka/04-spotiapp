import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify service iniciado")
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAjMGWEr_AAKED_fZBr2UT0z2fC68J8JseafacghDNq60Ohh-3RzhzGPj1ifKpnG9dU2vIRlKSKTckwqOQ'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});

   }
}
