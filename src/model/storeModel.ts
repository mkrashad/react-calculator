import audit, { AuditModel } from "./AuditModel"
import state, { StateModel } from "./StateModel";

export interface StoreModel {
  state: StateModel;
  audit: AuditModel;
}

const storeModel: StoreModel = {
  audit,
  state
}


export default storeModel;