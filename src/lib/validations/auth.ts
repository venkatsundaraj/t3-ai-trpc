import { z } from "zod";

export const PostSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export type PostSchemaType = z.infer<typeof PostSchema>;
