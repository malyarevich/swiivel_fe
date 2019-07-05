export interface IAutomationList {
  "id"?: string,            
  "name": string,
  "type_id": string,
  "template_id": string,
  "logics": any

}

export interface IAutomationTemplate {
  "id"?: string,    
  "type_id"?: "string";
	"name": string,
	"content": string
}

export interface IAutomationLogic {
  "type_id"?: "string";
	"name": string,
	"content": string
}

