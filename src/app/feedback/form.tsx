'use client';

import { useActionState } from 'react';
import { submitFeedback } from './action';

export function FeedbackForm() {
  const [state, formAction, pending] = useActionState(submitFeedback, null);

  return (
    <form action={formAction} noValidate>
      <fieldset>
        <label htmlFor="name">Seu nome</label>
        <input type="text" name="name" placeholder="Digite seu nome" defaultValue={state?.values?.name ?? ''} required />
        {state?.errors?.name && <p aria-live="polite">{state.errors.name}</p>}
      </fieldset>
      <fieldset>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" placeholder="Digite seu e-mail" defaultValue={state?.values?.email ?? ''} required />
        {state?.errors?.email && <p aria-live="polite">{state.errors.email}</p>}
      </fieldset>
      <fieldset>
        <label htmlFor="feedback">Feedback</label>
        <textarea name="feedback" placeholder="Digite seu feedback aqui" defaultValue={state?.values?.feedback ?? ''} />
        {state?.errors?.feedback && <p aria-live="polite">{state.errors.feedback}</p>}
      </fieldset>

      {state?.success && (
        <p aria-live="polite" className="text-green-700">
          Feedback enviado com sucesso!
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="flex items-center justify-center gap-2 px-4 py-2 rounded bg-dracula-500 text-white font-semibold disabled:bg-dracula disabled:cursor-not-allowed"
      >
        {pending && (
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
        )}
        {pending ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}
