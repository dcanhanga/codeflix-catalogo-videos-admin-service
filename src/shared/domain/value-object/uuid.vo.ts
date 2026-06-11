import { ValueObject } from "../value-object";
import {v7 as uuidv7,validate as uuidValidate} from 'uuid'
export class Uuid extends ValueObject {
     readonly id:string
     constructor(id?:string){
        super()
        this.id = id?? uuidv7()
        this.validate(this.id)

     }
     private validate(value:string){
      const isValid = uuidValidate(value)
        if(!isValid){
            throw new InvalidUUIDError()
        }
       
     }
}


export class InvalidUUIDError extends Error {
    constructor(message?: string) {
        super(message?? 'Id must be a valid UUID version 7');
        this.name = 'InvalidUUIDError';
    }
}