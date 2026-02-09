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
  CYCLE = 'CYCLE',
  ICON_IMPACT = 'ICON_IMPACT',
  VIDEO = 'VIDEO',
  TESTIMONIALS = 'TESTIMONIALS',
  GRID = 'GRID',
  BONUS_STACK = 'BONUS_STACK',
  BONUS_STACK_OFFER = 'BONUS_STACK_OFFER',
  METRIC_BARS = 'METRIC_BARS'
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
  icon?: string; // Large emoji/text for ICON_IMPACT layout
  images?: string[]; // Images to display alongside content
  imageBelow?: boolean; // When true, images render full-width below content instead of side-by-side
  videos?: string[]; // Video files to embed
  highlightTerms?: string[]; // Words to highlight in brand color
  maxWidth?: string; // Override default max-width for the text container (e.g. 'max-w-[90%]')
  tableData?: {
    headers: string[];
    rows: TableRow[];
  };
  comparisonData?: {
    leftTitle: string;
    leftContent: string[];
    leftImage?: string;
    rightTitle: string;
    rightContent: string[];
    rightImage?: string;
  };
  metricBarsData?: {
    leftLabel: string;
    rightLabel: string;
    metrics: Array<{
      label: string;
      leftValue: number;
      rightValue: number;
      leftDisplay: string;
      rightDisplay: string;
      lowerIsBetter?: boolean;
    }>;
    highlightMetric?: {
      label: string;
      leftDisplay: string;
      rightDisplay: string;
    };
  };
  footer?: string;
  footerImage?: string;
  backgroundImage?: string;
  ctaLink?: string;
}