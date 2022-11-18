export type Primitive = boolean | number | string | object | File;

export type ValidationResponse = {
  isValid: boolean;
  reason?: string;
};

export type ValidatorFunction = (...x: any) => ValidationResponse;