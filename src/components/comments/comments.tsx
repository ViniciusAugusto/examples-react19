'use client';

import type { KeyboardEvent } from 'react';
import { Comments as CommentsType } from '@/types/comments';
import { useRef } from 'react';
import CommentsList from './commentsList';


type CommentsProps = {
    comments: CommentsType[],
    title: string;
    submitComment(formData: FormData): Promise<void>
}

export function Comments({ comments, title, submitComment }: CommentsProps) {
    const lastCommentRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
        if (event.key === 'Enter') {
            event.currentTarget.form?.requestSubmit();
            setTimeout(() => {
                if (lastCommentRef.current) {
                    lastCommentRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
                }
            }, 100);
        }
    }

    async function handleFormSubmit(formData: FormData) {
        await submitComment(formData);
        if (formRef.current) {
            formRef.current.reset();
        }
    }

    return (
        <div className="bg-nosferatu p-6 w-full">
            <h1 className="text-dracula text-lg font-bold mb-4 text-left">{title}</h1>
            <div className='flex mb-4'>
                 <form ref={formRef} className="bg-nosferatu !p-0 rounded-lg shadow-md w-full" action={handleFormSubmit}>
                    <div className="">
                        <label className="block font-bold mb-2 text-dracula" htmlFor="comment">
                            Adicionar Comentário
                        </label>
                        <textarea
                            className="shadow appearance-none border text-dracula rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="comment" rows={3} name='comment' placeholder="Digite seu comentário  " onKeyDown={handleKeyDown}></textarea>
                    </div>
                    <button
                        className="bg-dracula hover:bg-dracula-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Enviar
                    </button>
                </form>
            </div>
            <CommentsList comments={comments} lastCommentRef={lastCommentRef} />
        </div>
    );
}
