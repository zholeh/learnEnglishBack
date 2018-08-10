import { MappedError, Location } from '../../node_modules/express-validator/shared-typings';
import { et } from '../app';

export class AppErrors implements MappedError {

    public param = '';
    public msg = '';
    public value = '';
    public location: Location = 'body';
    constructor(msg: string, param?: string, value?: string, location?: Location) {

        this.param = param || this.param;
        this.msg = msg || this.msg;
        this.value = value || this.value;
        this.location = location || this.location;
        this.msg = et.translate(et.localeKey, this.param + '.' + this.msg);
    }
}