export class Service {

    constructor(source: Partial<Service>) {
        Object.assign(this, source);
    }
}