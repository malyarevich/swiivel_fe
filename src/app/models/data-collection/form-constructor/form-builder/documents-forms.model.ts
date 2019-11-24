import {Section} from '../../section.model';
import {DocumentsModel} from './documents.model';
import {FormsPDFModel} from './formsPDF.model';

export interface DocumentsFormsModel {
  documents: DocumentsModal;
  formsPDF: FormsPDFModal;
}

export interface DocumentsModal {
  sectionName: string;
  sectionWidth: string;
  documentsItems: DocumentsModel[];
}

export interface FormsPDFModal {
  sectionName: string;
  sectionWidth: string;
  formsPDFItems: FormsPDFModel[];
}

export const documentsFormsDefault: DocumentsFormsModel = {
  documents: {
    sectionName: 'Documents for Parents',
    sectionWidth: Section.full,
    documentsItems: [],
  },
  formsPDF: {
    sectionName: 'School Forms',
    sectionWidth: Section.full,
    formsPDFItems: [],
  }
};
