export interface CarModel {
    id: string;
    name: string;
    "cyrillic-name": string;
    class: string;
    "year-from": number;
    "year-to"?: number;
    path: {
      "mark-id": string;
    };
  }
  
  export interface CarApiResponse {
    id: string;
    name: string;
    "cyrillic-name": string;
    popular: boolean;
    country: string;
    models: CarModel[];
  }
  