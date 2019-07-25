import { Injectable } from '@angular/core';

import { HttpHeaders,  HttpClient , HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { app_service } from '../app.service';
import { AddressModel } from './address.model';

@Injectable()
export class AddressService {

    constructor(private http: HttpClient, public gsvc: app_service) {

    }

    // private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private AddressUrl = this.gsvc.BaseURL + '/addresses'; //api/addresses
    me;

    options() {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json'
        });
        return ({ headers: headers, withCredentials: true });

    }


    resget() {
        return this.http.get(this.AddressUrl, this.options())
            .toPromise()
            .then((response) => {
                return <AddressModel[] > response;
            })
            .catch((res: Response) => this.handleError(res));
    }


    // Get 
    query(query: any): Promise <AddressModel[] > {
        const url = `${this.AddressUrl}?${query}`;
        return this.http.get(url, this.options())
            .toPromise()
            .then((response) => {
                return <AddressModel[] > response;
            })
            .catch((res: Response) => this.handleError(res));
    }


    get(id: number): Promise <AddressModel > {
        const url = `${this.AddressUrl
    } / ${id } `;
        return this.http.get(url)
            .toPromise()
            .then(response => response  as AddressModel)
            .catch(this.handleError);
    }


    save(AddressModel: AddressModel): Promise<AddressModel> {
        return this.http
            .post(this.AddressUrl, JSON.stringify(AddressModel), this.options())
            .toPromise()
            .then(res => res as AddressModel)
            .catch(this.handleError);
    }
 

    delete(AddressModel: AddressModel): Promise<void> {
        const url = `${this.AddressUrl}/${AddressModel.id}`;
    return this.http
        .delete(url, this.options())
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
}
 

    private handleError = (error: any): Promise<any> => {
        console.log("error...............",error);
    // this.gsvc.showToast('An error occurred');
    return Promise.reject(error.message || error);
}
}