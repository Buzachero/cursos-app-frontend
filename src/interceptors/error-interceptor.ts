import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { AlertController } from "ionic-angular";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public alertCtrl: AlertController) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {   
        console.log('Chamou o interceptor!')     
        return next.handle(req)
        .catch((error, caught) => {

            let errorObj = error;
            if(errorObj.error) {
                errorObj = errorObj.error;
            }

            if(!errorObj.status) {
                errorObj = JSON.parse(errorObj);
            }

            console.log("Erro detectado pelo interceptor!");
            console.log(errorObj);

            this.handleDefaultError(errorObj);

            return Observable.throw(errorObj);
        }) as any;
    }

    handleDefaultError(errorObj) {
        let alert = this.alertCtrl.create({
            title: 'Erro ' + errorObj.status + ': ' + errorObj.error,
            message: errorObj.message,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        }
        );
        alert.present();
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};