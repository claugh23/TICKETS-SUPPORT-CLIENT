export interface EmailMessageModel {

    _id?:string;
    subject:string;
    emailAddress:string;
    message:string;
    datesended?:Date;
}