import { api } from "@/convex/_generated/api";
import { currentUser, auth } from "@clerk/nextjs/server";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveblocks = new Liveblocks({
  secret:
    "sk_dev_RWjg0gtAEYluDiERj1shKZtaizK_EObR8slXoeMb2L7PUrjdvujo4P5Qq-X5AIys",
});

export async function POST(request: Request) {
  const authrization = await auth();
  const user = await currentUser();

  // console.log("Auth Info ", { authrization, user });

  if (!user || !authrization) {
    return new Response("Unauthorized", { status: 403 });
  }

  const { room } = await request.json();
  const board = await convex.query(api.board.get, { id: room });

  // console.log("Auth Info 2 ", {
  //   board,
  //   room,
  //   boardOrgId: board?.orgId,
  //   userOrgId: authrization.orgId,
  // });

  if (board?.orgId !== authrization.orgId) {
    return new Response("Unauthorized", { status: 403 });
  }
  const userInfo = {
    name: user.firstName!,
    picture: user.imageUrl!,
  };

  console.log("Auth Info 3 ", { userInfo });

  const session = liveblocks.prepareSession(user.id, { userInfo });

  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }

  const { status, body } = await session.authorize();

  // console.log("Auth Info 4 ", { status, body });

  return new Response(body, { status });
}
