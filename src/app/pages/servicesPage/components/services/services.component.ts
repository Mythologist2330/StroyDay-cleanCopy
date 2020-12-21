import { Component } from "@angular/core";

export interface IServices{
    title: string
    someOfServices: {
        service1: string
        service2: string
        service3: string
        service4: string
    }
    showAllServices: number
}

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})

export class ServicesComponent{

    services: IServices[] = [
        {
            title: 'Архитектура и проектирование',
            someOfServices: {
                service1: 'Архитектурное проектирование',
                service2: 'Визуализация интерьера',
                service3: '3D-проектирование',
                service4: 'Готовые проекты'
            },
            showAllServices: 24
        },

        {
            title: 'Оформление и дизайн',
            someOfServices: {
                service1: 'Архитектурное проектирование',
                service2: 'Визуализация интерьера',
                service3: '3D-проектирование',
                service4: 'Готовые проекты'
            },
            showAllServices: 24
        },

        {
            title: 'Строительство',
            someOfServices: {
                service1: 'Архитектурное проектирование',
                service2: 'Визуализация интерьера',
                service3: '3D-проектирование',
                service4: 'Готовые проекты'
            },
            showAllServices: 24
        },

        {
            title: 'Ремонт и отделка',
            someOfServices: {
                service1: 'Архитектурное проектирование',
                service2: 'Визуализация интерьера',
                service3: '3D-проектирование',
                service4: 'Готовые проекты'
            },
            showAllServices: 24
        },

        {
            title: 'Инженерные системы',
            someOfServices: {
                service1: 'Архитектурное проектирование',
                service2: 'Визуализация интерьера',
                service3: '3D-проектирование',
                service4: 'Готовые проекты'
            },
            showAllServices: 24
        },

        {
            title: 'Бытовые услуги',
            someOfServices: {
                service1: 'Архитектурное проектирование',
                service2: 'Визуализация интерьера',
                service3: '3D-проектирование',
                service4: 'Готовые проекты'
            },
            showAllServices: 24
        },

        {
            title: 'Загородное строительство и ремонт, ландшафтный дизайн',
            someOfServices: {
                service1: 'Архитектурное проектирование',
                service2: 'Визуализация интерьера',
                service3: '3D-проектирование',
                service4: 'Готовые проекты'
            },
            showAllServices: 24
        },

        {
            title: 'Строительные материалы',
            someOfServices: {
                service1: 'Архитектурное проектирование',
                service2: 'Визуализация интерьера',
                service3: '3D-проектирование',
                service4: 'Готовые проекты'
            },
            showAllServices: 24
        },

        {
            title: 'Строительное оборудование',
            someOfServices: {
                service1: 'Архитектурное проектирование',
                service2: 'Визуализация интерьера',
                service3: '3D-проектирование',
                service4: 'Готовые проекты'
            },
            showAllServices: 24
        },

        {
            title: 'Спецтехника и грузоперевозки',
            someOfServices: {
                service1: 'Архитектурное проектирование',
                service2: 'Визуализация интерьера',
                service3: '3D-проектирование',
                service4: 'Готовые проекты'
            },
            showAllServices: 24
        },

        {
            title: 'Прочие работы и услуги',
            someOfServices: {
                service1: 'Архитектурное проектирование',
                service2: 'Визуализация интерьера',
                service3: '3D-проектирование',
                service4: 'Готовые проекты'
            },
            showAllServices: 24
        },

        {
            title: 'Готовые проекты',
            someOfServices: {
                service1: 'Архитектурное проектирование',
                service2: 'Визуализация интерьера',
                service3: '3D-проектирование',
                service4: 'Готовые проекты'
            },
            showAllServices: 24
        },

        {
            title: 'Поддержка бизнеса',
            someOfServices: {
                service1: 'Архитектурное проектирование',
                service2: 'Визуализация интерьера',
                service3: '3D-проектирование',
                service4: 'Готовые проекты'
            },
            showAllServices: 24
        },

        {
            title: 'Сопутствующие товары и услуги',
            someOfServices: {
                service1: 'Архитектурное проектирование',
                service2: 'Визуализация интерьера',
                service3: '3D-проектирование',
                service4: 'Готовые проекты'
            },
            showAllServices: 24
        },

        {
            title: 'Програмное обеспечение',
            someOfServices: {
                service1: 'Архитектурное проектирование',
                service2: 'Визуализация интерьера',
                service3: '3D-проектирование',
                service4: 'Готовые проекты'
            },
            showAllServices: 24
        },

        {
            title: 'Реставрационные работы',
            someOfServices: {
                service1: 'Архитектурное проектирование',
                service2: 'Визуализация интерьера',
                service3: '3D-проектирование',
                service4: 'Готовые проекты'
            },
            showAllServices: 24
        }
    ]

}