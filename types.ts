export enum SlideLayout {
  TITLE = 'TITLE',
  BULLETS = 'BULLETS',
  CENTER_STATEMENT = 'CENTER_STATEMENT',
  SPLIT_IMAGE = 'SPLIT_IMAGE',
  QUOTE = 'QUOTE',
  TABLE = 'TABLE',
  COMPARISON = 'COMPARISON',
  OFFER = 'OFFER',
  IMPACT_COVER = 'IMPACT_COVER',
  BIO = 'BIO',
  CYCLE = 'CYCLE'
}

export interface TableRow {
  label: string;
  value1: string | number;
  value2?: string | number;
  value3?: string | number;
  value4?: string | number;
  highlight?: boolean;
}

export interface SlideData {
  id: number;
  section: string;
  layout: SlideLayout;
  title?: string;
  subtitle?: string;
  content?: string[];
  highlight?: string; // For big emphasized text
  tableData?: {
    headers: string[];
    rows: TableRow[];
  };
  comparisonData?: {
    leftTitle: string;
    leftContent: string[];
    rightTitle: string;
    rightContent: string[];
  };
  footer?: string;
  backgroundImage?: string;
}