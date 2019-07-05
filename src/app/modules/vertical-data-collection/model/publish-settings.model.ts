export interface IAutomationList {
  "automation_list": IAutomationListItem[];
}

export interface IAutomationListItem {
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
  "id"?: string,
	"logic": string,
	"name": string,
}
