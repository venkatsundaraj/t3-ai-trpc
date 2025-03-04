import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { NextRequest } from "next/dist/server/web/spec-extension/request";

export default async function POST(req: Request, res: Response) {
  const { messages } = await req.json();

  const stream = await streamText({
    model: openai("gpt-4o"),
    system: "You are a helpful assistant.",
    messages,
  });
  console.log(stream);
  return stream;
}
