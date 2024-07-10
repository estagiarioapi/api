/* eslint-disable prettier/prettier */
export default function configuration() {
  return {
    NODE_ENV: process.env.NODE_ENV,
    OPENAI_KEY: process.env.OPENAI_KEY,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  };
}
