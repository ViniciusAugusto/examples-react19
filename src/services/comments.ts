'only server'
import { Comments } from "@/types/comments";

export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "";

async function getComments(): Promise<Comments[]> {

  const response = await fetch(SERVER_URL, {
    next: { tags: ['comments'] },
    cache: 'no-store'
  });

  const comments = await response.json();
  return comments;
}

async function postComments(comment: string) {
    await fetch(SERVER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
    });
}


export { getComments, postComments }