import * as Valid from '../Validation/SharedValidation.js';
export default class Prescriptopn {


    constructor(...arg) {
        if (arguments.length != 0) {
            this.fireID = arguments[0];
            this.DOC_ID = arguments[1];
            this.PAT_DOC_ID = arguments[2];
            this.Department = arguments[3];
            this.Diagnoses = arguments[4];
            this.Medicines_List = arguments[5];
            this.data = arguments[6]
            this.Medical_analyzes_required = arguments[7]
            this.Radiology_required = arguments[8]
        } else {
            this.fireID = "";
            this.DOC_ID = '';
            this.PAT_DOC_ID = '';
            this.Department = '';
            this.Diseases = '';
            this.Diagnoses = '';
            this.Medicines_List = '';
            this.data = '';
            this.Medical_analyzes_required = '';
            this.Radiology_required ='';
        }
                
    }




}