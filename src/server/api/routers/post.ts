import { z } from "zod";
import { PostSchema } from "~/lib/validations/auth";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { posts } from "~/server/db/schema";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  uploadContent: publicProcedure
    .input(PostSchema)
    .mutation(({ input, ctx }) => {
      console.log(input);
      return "Data arrived";
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
