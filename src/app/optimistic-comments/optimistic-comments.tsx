'use client';

import { useOptimistic } from 'react';
import { submitComment } from './action';
import { Comments as CommentsType } from '@/types/comments';
import { Comments } from '@/components';

export function OptimisticComments({ comments }: { comments: CommentsType[] }) {
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment: string) => [
      ...state,
      { id: Math.random().toString(36).slice(2), comment: newComment },
    ]
  );

  async function handleFormSubmit(formData: FormData) {
    addOptimisticComment(formData.get('comment') as string);
    await submitComment(formData);
  }

  return (
     <Comments title='Exemplo com hook useOptimistic' comments={optimisticComments} submitComment={handleFormSubmit}/>
  );
}
