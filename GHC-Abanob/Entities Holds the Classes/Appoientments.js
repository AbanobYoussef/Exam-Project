import * as Valid from '../Validation/SharedValidation.js';
export default class Appoientments {


    constructor(...arg) {
        if (arguments.length != 0) {
            this.fireID = arguments[0];
            this.DOC_ID = arguments[1];
            this.PAT_DOC_ID = arguments[2];
            this.Date = arguments[3]
        } else {
            this.fireID = "";
            this.DOC_ID = '';
            this.PAT_DOC_ID = '';
            this.Date = '';
        }


    }




}