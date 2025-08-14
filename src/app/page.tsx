import Link from 'next/link';

export default function Home() {
  return (
    <ul className="flex flex-col m-auto w-fit content-center h-screen justify-center gap-2">
      <Link className="text-dracula hover:text-dracula-600 transition-colors" href="/comments">
        Server Component e Server Actions
      </Link>
      <Link className="text-dracula hover:text-dracula-600 transition-colors" href="/optimistic-comments">
        Exemplo com hook useOptimistic
      </Link>
      <Link className="text-dracula hover:text-dracula-600 transition-colors" href="/feedback">
        Exemplo com Form
      </Link>
       <Link className="text-dracula hover:text-dracula-600 transition-colors" href="/loading">
        Exemplo com use() hook
      </Link>
      {/* <Link className="text-dracula hover:text-dracula-600 transition-colors" href="/search">
        Exemplo de busca
      </Link> */}
    </ul>
  );
}
