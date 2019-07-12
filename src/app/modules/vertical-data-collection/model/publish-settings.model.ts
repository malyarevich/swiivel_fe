export const defaultAutomation: IAutomation = {
  automation_list: [
    {
      name: "New Automation",
      type_id: 1,
      template_id: 1,
      logics: [1,2,3]
    }
  ]
};


export interface IAutomation {
  "automation_list"?: IAutomationListItem[];
  "logic_list"?: IAutomationLogicListItem[];
  "template_list"?: IAutomationTemplateListItem[];
  "type_list"?: IAutomationTypeListItem[];
}

export interface IAutomationListItem {
  "created_at"?: string;
  "updated_at"?: string;
  "deleted_at"?: string;

  "created_by"?: object;
  "updated_by"?: object;

  "id"?: number;
  "form_id"?: number;
  "logics": number[];
  "name": string;
  "template_id"?: number;
  "type_id"?: number;
}

export interface IAutomationLogicListItem {
  "created_at"?: string;
  "updated_at"?: string;
  "deleted_at"?: string;
    
  "id"?: number;
  "logic": string;
  "name": string;
  "pivot"?: {
    "automation_id": number;
    "logic_id": number;
  };
}

export interface IAutomationTemplateListItem {
  "created_at"?: string;
  "updated_at"?: string;
  "deleted_at"?: string;

  "id"?: number;    
  "type_id"?: number;
	"name": string;
	"content": string;
}

export interface IAutomationTypeListItem {
  "created_at"?: string;
  "updated_at"?: string;
  "deleted_at"?: string;

  "id"?: number;
	"name": string;
  "type": string;

}