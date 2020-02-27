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
      'Authorization': 'Bearer BQD6WG2twOz4i-05t9w8yw4_w-b5Y5QfqfLhFEFXirqBFYDFhtBcm35XTw7jHQ_kYfnM4CC76iLttuTFG6w'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});

   }

   getArtista(termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD6WG2twOz4i-05t9w8yw4_w-b5Y5QfqfLhFEFXirqBFYDFhtBcm35XTw7jHQ_kYfnM4CC76iLttuTFG6w'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers});
   }
}
