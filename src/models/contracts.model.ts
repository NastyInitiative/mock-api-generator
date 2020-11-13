export class OTP {
    otp: string;
    fieldGroup: string;
    fields: [];
}

export class Documents {
  id: string;
  url: string;
  description: string;
  fields: Field[];
}

class Field {
  name: string;
  fieldGroup: string;
  shortDescription: string;
  longDescription: string;
  optional: boolean;
}