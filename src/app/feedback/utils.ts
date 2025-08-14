import { z } from '@/helpers/i18n';

export const feedbackSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  feedback: z.string().min(10).max(1000),
});