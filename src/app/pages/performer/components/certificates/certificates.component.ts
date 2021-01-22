import { Component } from "@angular/core";

@Component({
    selector: 'app-certificates',
    templateUrl: './certificates.component.html',
    styleUrls: ['./certificates.component.scss']
})

export class CertificatesComponent {

    openCloseComponent: boolean = false
    certificates: any = [
        {
            certificate: '../../../../../assets/images/performer/certificate.png',
            title: 'Сертификат качества',
            description: 'Выдан государственной организацией ООО “Сертификаты и права” 12 декабря 2014 года'
        },
        {
            certificate: '../../../../../assets/images/performer/certificate.png',
            title: 'Сертификат качества',
            description: 'Выдан государственной организацией ООО “Сертификаты и права” 12 декабря 2014 года'
        },
        {
            certificate: '../../../../../assets/images/performer/certificate.png',
            title: 'Сертификат качества',
            description: 'Выдан государственной организацией ООО “Сертификаты и права” 12 декабря 2014 года'
        }
    ]

}