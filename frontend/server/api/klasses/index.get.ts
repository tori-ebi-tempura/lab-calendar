import { klasses } from "~/server/dummy_db/klasses";

type ResponseObject = {
  klassId: number;
  klassName: string;
  link: {
    self: string;
  };
};

export default defineEventHandler(() =>
  klasses.map(
    (klass): ResponseObject => ({
      klassId: klass.klassId,
      klassName: klass.klassName,
      link: {
        self: `/api/klasses/${klass.klassId}`,
      },
    }),
  ),
);
