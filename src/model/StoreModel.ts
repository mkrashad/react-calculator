import audit, { AuditModel } from "./AuditModel"
import buttons, { ButtonsModel } from "./StateModel";

export interface StoreModel {
  audit: AuditModel;
  buttons: ButtonsModel;
}

const storeModel: StoreModel = {
  audit,
  buttons
}


export default storeModel;