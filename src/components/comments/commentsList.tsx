'use client';

import { Comments } from '@/types/comments';
import React, { RefObject } from 'react';

type CommentsListProps = {
    comments: Comments[];
    lastCommentRef: RefObject<HTMLDivElement | null> | null;
};

const CommentsList: React.FC<CommentsListProps> = ({ comments, lastCommentRef }) => (
    <div className="flex flex-col space-y-4">
        {comments.map(({ id, comment }, idx) => (
            <div
                className="bg-white p-4 rounded-lg shadow-md"
                key={id}
                ref={idx === comments.length - 1 ? lastCommentRef : undefined}
            >
                <h3 className="text-sm text-nosferatu font-bold">ID: {id}</h3>
                <p className="text-lg text-nosferatu">Mensagem: {comment}</p>
            </div>
        ))}
    </div>
);

export default CommentsList;