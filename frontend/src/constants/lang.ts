export const FORM_VALIDATION_MESSAGE = {
  REQUIRED: (fieldName: string) => `Please enter the ${fieldName}.`,
  MIN_LENGTH: (fieldName: string, length: number) =>
    `${fieldName} must be at least ${length} long.`,
  MATCH: (fieldName: string) => `${fieldName} should match.`,
};
