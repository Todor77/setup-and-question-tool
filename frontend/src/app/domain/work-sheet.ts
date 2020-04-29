export class WorkSheet {
  id: number;
  name: string;
  address: string;
  city: string;
  stateOrProvince: string;
}

export interface page {
  size: number,
  totalElements: number,
  totalPages: number,
  number: number
}
