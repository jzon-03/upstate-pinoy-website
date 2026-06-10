export interface Event {
  id?: string;
  title: string;
  description: string;
  date: Date | any;
  time: string;
  location: string;
  tags?: string[];
  month?: string;
  day?: string;
}
