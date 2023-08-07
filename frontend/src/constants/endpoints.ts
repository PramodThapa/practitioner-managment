const v1Endpoints = {
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  ACCESS_TOKEN: "/auth/access-token",
  PRACTITIONERS: "/practitioners/:id",
};

type EndPoint = Record<keyof typeof v1Endpoints, string>;

export const endpoints: EndPoint = Object.entries(v1Endpoints).reduce(
  (accumulator, [key, value]) => {
    return {
      ...accumulator,
      [key]: `v1${value}`,
    };
  },
  { ...v1Endpoints }
);
