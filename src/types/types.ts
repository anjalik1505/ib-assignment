export interface ChartData {
    x: number;
    y: number;
  }
  
  export interface Article {
    title: string;
    subTitle: string;
    date: string;
    url: string;
    description: string;
    chart: ChartData[];
  }