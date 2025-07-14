'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/lib/schemas/authschema';
import { useAuth } from '@/lib/hooks/Personal/Auth/Auth';

export default function LoginPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { login } = useAuth();

  return (
    <form onSubmit={handleSubmit((data) => login.mutate(data))}>
      <input {...register('email')} placeholder="Email" />
      <input {...register('password')} type="password" />
      <button disabled={login.isPending}>
        {login.isPending ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
}