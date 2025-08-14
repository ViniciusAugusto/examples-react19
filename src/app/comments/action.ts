"use server";
import { postComments } from '@/services/comments';
import { revalidateTag } from 'next/cache';

export async function submitComment(formData: FormData) {
  const comment = formData.get('comment') as string;

  await postComments(comment)
  revalidateTag('comments');
}
