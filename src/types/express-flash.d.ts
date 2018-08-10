
/// <reference types="express" />

// Add RequestValidation Interface on to Express's Request Interface.
declare namespace Express {
    interface Request extends Flash, Translate {}
    interface Response extends Translate {}
    interface Application extends Translate {}
}

interface Flash {
    flash(type: string, message: any): void;
}

interface Translate {
    // et: any;
}

declare module 'express-flash';

