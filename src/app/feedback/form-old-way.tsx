"use client";

import { useState } from 'react';
import { submitFeedback } from './action';

export function FeedbackFormOldWay() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    feedback: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setSuccess(false);
    setErrors({});
    const formData = new FormData();
    formData.append('name', formValues.name);
    formData.append('email', formValues.email);
    formData.append('feedback', formValues.feedback);
    try {
      const result = await submitFeedback(undefined, formData);
      if (result?.success) {
        setSuccess(true);
        setFormValues({ name: '', email: '', feedback: '' });
      } else {
        setErrors(result?.errors || {});
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <fieldset>
        <label htmlFor="name">Seu nome</label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          value={formValues.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p aria-live="polite">{errors.name.join(', ')}</p>}
      </fieldset>
      <fieldset>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p aria-live="polite">{errors.email.join(', ')}</p>}
      </fieldset>
      <fieldset>
        <label htmlFor="feedback">Feedback</label>
        <textarea
          name="feedback"
          placeholder="Digite seu feedback aqui"
          value={formValues.feedback}
          onChange={handleChange}
        />
        {errors.feedback && <p aria-live="polite">{errors.feedback.join(', ')}</p>}
      </fieldset>

      {success && (
        <p aria-live="polite" className="text-green-700">
          Feedback enviado com sucesso!
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="flex items-center justify-center gap-2 px-4 py-2 rounded bg-blue-600 text-white font-semibold disabled:bg-blue-300 disabled:cursor-not-allowed"
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
