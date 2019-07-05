import { MotorModel } from './MotorModel';
import { LegalInfoModel } from './LegalInfoModel';
import { ServicesModel } from './ServicesModel';

export class VehiclesModel {
    type:string;
    model:string;
    manufacturer:string;
    color:string;
    produced:number;
    load:number;
    seats:number;
    km:number;
    workhours:number;
    issues:boolean;
    motor:MotorModel;
    legal:LegalInfoModel;
    services:ServicesModel;
    image:string;
    available:boolean;
    daysReserved:number;

}