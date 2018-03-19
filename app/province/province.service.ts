import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Rx";

@Injectable()
export class ProvinceService {
    constructor(
        private http: Http,
        private router: Router
    ) { }
    calprovince (): Observable<any> {
        //ip computer use ipconfig in cmd ipv4
        let apiUrl = "http://172.20.10.3:3000/province";

        return this.http.get(
            apiUrl
        )
        .map(response => response.json())
        .catch(this.handleErrors);
    }

      //function other
    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}