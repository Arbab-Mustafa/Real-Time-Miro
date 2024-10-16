import { v } from "convex/values";
import { mutation } from "./_generated/server";

const images = [
  "/public/1.jpg",
  "/public/2.jpg",
  "/public/3.jpg",
  "/public/4.jpg",
];

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const randomImg = images[Math.floor(Math.random() * images.length)];

    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imgUrl: randomImg,
    });

    return board;
  },
});

export const remove = mutation({
  args: {
    id: v.id("boards"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    await ctx.db.delete(args.id);
  },
});

export const update = mutation({
  args: { id: v.id("boards"), title: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }
    const title = args.title.trim();

    if (!title) {
      throw new Error("Title is required");
    }

    if (title.length > 40) {
      throw new Error("Title is too long");
    }

    const board = await ctx.db.patch(args.id, {
      title: args.title,
    });

    return board;
  },
});
