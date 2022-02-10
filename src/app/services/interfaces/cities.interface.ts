export interface Stay {
  city:      string;
  country:   string;
  superHost: boolean;
  title:     string;
  rating:    number;
  maxGuests: number;
  type:      Type;
  beds:      number | null;
  photo:     string;
}

export enum Type {
  EntireApartment = "Entire apartment",
  EntireHouse = "Entire house",
  PrivateRoom = "Private room",
}
