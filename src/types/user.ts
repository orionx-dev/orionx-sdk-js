export interface Me {
  _id: string;
  email: string;
  name: string;
  profile: Profile;
}

export interface Profile {
  fullName: string;
  phone: null;
  kycVerified: boolean;
  birthdate: number;
  countryCode: string;
  occupation: null;
  address: null;
}
