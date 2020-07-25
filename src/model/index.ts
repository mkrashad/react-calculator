import auditModel, { AuditModel } from "./audit"
import buttonsModel, { ButtonsModel } from "./buttons";

export interface StoreModel {
  audit: AuditModel;
  buttons: ButtonsModel;
}

const storeModel: StoreModel = {
  audit: auditModel,
  buttons: buttonsModel
}


export default storeModel;