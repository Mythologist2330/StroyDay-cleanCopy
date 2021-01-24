import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-documents',
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.scss']
})

export class DocumentsComponent {

    public openCloseComponent:boolean = true;
    documents: any = [
        {
            title: 'Акт приема-передачи',
            format: 'PDF',
            size: 365
        },
        {
            title: 'Договор подряда',
            format: 'PDF',
            size: 365
        }
    ];

    constructor(private router: Router) {

    }

    download() {
        window.open('assets/files/test.pdf')
    }

}