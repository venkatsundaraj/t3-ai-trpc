"use client";

import * as React from "react";
import { FC } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "~/lib/utils";
import { buttonVariants } from "~/app/_components/button";
import { Input } from "~/app/_components/input";
import { PostSchema, PostSchemaType } from "~/lib/validations/auth";
import { Icons } from "~/app/_components/icons";
import { api } from "~/trpc/server";

interface pageProps {}

const page = async ({}: pageProps) => {
  // const createMutation = api.post.uploadContent.useMutation();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PostSchemaType>({
    resolver: zodResolver(PostSchema),
  });

  async function onSubmit(data: PostSchemaType) {
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      className={cn("grid h-screen w-screen items-center justify-center gap-6")}
    >
      <form className="min-w-96" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Input
              id="text"
              placeholder="Hello"
              type="text"
              autoCapitalize="none"
              autoComplete="text"
              autoCorrect="off"
              disabled={isSubmitting}
              {...register("title")}
            />
            {errors?.title ? (
              <p className="text-destructive h-4 px-1 text-xs">
                {errors.title.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>
          <div className="grid gap-1">
            <Input
              id="text"
              placeholder="Write something..."
              type="text"
              autoCapitalize="none"
              autoComplete="text"
              autoCorrect="off"
              disabled={isSubmitting}
              {...register("content")}
            />
            {errors?.content ? (
              <p className="text-destructive h-4 px-1 text-xs">
                {errors.content.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>
          <button
            className={cn(
              buttonVariants({ size: "sm", variant: "outline" }),
              "w-48",
            )}
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <Icons.Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
