'use server';

import { feedbackSchema } from "./utils";


export async function submitFeedback(_: unknown, formData: FormData) {
  const formValues = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    feedback: formData.get('feedback') as string,
  };

  // // Exemplo de timeout na validação do form
  // await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 segundos
  const { success, error, data } = feedbackSchema.safeParse(formValues);

  if (!success) {
    return {
      errors: error.flatten().fieldErrors,
      values: formValues,
    };
  }

  // exibe o console somente no server
  console.log(data);

  return {
    success: true,
  };
}
