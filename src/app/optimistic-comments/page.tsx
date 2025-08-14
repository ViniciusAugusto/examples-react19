import { OptimisticComments } from './optimistic-comments';
import { getComments } from '@/services/comments';

export default async function AddCommentPage() {
  const comments = await getComments();

  return <OptimisticComments comments={comments} />;
}