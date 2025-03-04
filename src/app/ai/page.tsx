"use client";

import { Button } from "~/app/_components/button";
import { generateTextAction } from "~/server/actions";
import { useState } from "react";

export default function Page() {
  const [generation, setGeneration] = useState("");
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Generate Text Example</h1>
      <Button
        className="bg-black text-violet-600"
        onClick={async () => {
          const result = await generateTextAction();
          setGeneration(result);
        }}
      >
        Tell me a joke
      </Button>
      <pre>{JSON.stringify(generation, null, 2)}</pre>
    </div>
  );
}
