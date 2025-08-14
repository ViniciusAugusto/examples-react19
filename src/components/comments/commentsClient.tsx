'use client';

import { useRef, use } from 'react';
import CommentsList from './commentsList';
import { Suspense } from 'react';
import { Comments } from '@/types/comments';
import { SERVER_URL } from '@/services/comments';

const commentsPromise = new Promise<Comments[]>(resolve => {
  setTimeout(async () => {
    const response = await fetch(SERVER_URL, { cache: 'no-store' });
    resolve(await response.json());
  }, 5000); // 5s para mostrar o loading
});

function DataComponent() {
    const data = use(commentsPromise); // Suspende até a promise ser resolvida


// com useEffect
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     setLoading(true);
//     commentsPromise.then(result => {
//         setData(result);
//         setLoading(false)
//     });
//   }, []);



  const lastCommentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-nosferatu p-6 w-full">
      <h1 className="text-dracula text-lg font-bold mb-4 text-left">Exemplo use() hook</h1>
      <CommentsList comments={data} lastCommentRef={lastCommentRef} />

      {/* Exemplo com useEffect */}
      {/* <h2 className="text-dracula text-center text-md font-bold mb-2 text-left">Exemplo com useEffect</h2> */}
      {/* {loading ? <Loading /> : <CommentsList comments={data} lastCommentRef={lastCommentRef} />} */}
    </div>
  );
}

const Loading = () => <h1 className="m-2 text-center text-dracula text-lg font-bold mb-4 text-left">Carregando...</h1>

export function CommentsClient() {
  return (
    <Suspense fallback={<Loading />}>
      <DataComponent />
    </Suspense>
  );
}