import { Component } from "@angular/core";

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
    ]

}