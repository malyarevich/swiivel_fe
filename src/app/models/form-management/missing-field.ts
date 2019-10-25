export interface MissingFields {
    count_required_fields: number;
    count_missing_fields: number;
    completion_percentage: number;
    sections?: (SectionsEntity)[] | null;
}

export interface SectionsEntity {
    count_all_required: number;
    name: string;
    count: number;
    sections: Object;
}
  