import InputTextBase from "./input-text-base";
import * as z from 'zod';

export default class InputNumberBase extends InputTextBase {
  constructor() {
    super();
    this._buildSchema = () => {
      let schema = z.number();

      if (this.required) {
        
      }

      if (this.gt) {
        schema = schema.gt(Number(this.gt), this.gtMessage || `Minimum value is ${this.gt}`);
      }

      return schema;
    };
  }
}
