import { Comments } from '@/components';
import { submitComment } from './action';
import { getComments } from '@/services/comments';

export const dynamic = 'force-dynamic';

export default async function AddCommentPage() {
  const comments = await getComments();

  return <Comments title='Server Components e Server Actions' comments={comments} submitComment={submitComment} />;
}