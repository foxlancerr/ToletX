// src/components/forms/login-form.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { FormInput } from './form-input';
import { loginSchema, type LoginFormData } from '@/lib/validations/auth';
import { useState } from 'react';
// import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { Facebook } from 'lucide-react';

export function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    //   const { toast } = useToast();

    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    async function onSubmit(data: LoginFormData) {
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            //   toast({
            //     title: "Logged in successfully!",
            //     description: "Welcome back to your account.",
            //   });

            // Redirect or handle success
            console.log('Login data:', data);
        } catch (error) {
            //   toast({
            //     title: "Login failed",
            //     description: "Invalid email or password.",
            //     variant: "destructive",
            //   });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="w-full max-w-md space-y-8">
            <div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Welcome back
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Sign in to your rental property account
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormInput
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                        {...form.register('email')}
                        error={form.formState.errors.email?.message}
                        required
                    />

                    <FormInput
                        label="Password"
                        type="password"
                        placeholder="at least 8 characters"
                        {...form.register('password')}
                        error={form.formState.errors.password?.message}
                        required
                    />

                    <div className="flex items-center justify-end">


                        <div className="text-sm">
                            <Link
                                href="/forgot-password"
                                className="font-medium text-primary hover:text-primary/80"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/80 rounded-[3px] cursor-pointer"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </Button>
                </form>
            </Form>

            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">Or</span>
                    </div>
                </div>

                <div className="mt-6 flex flex-row w-full gap-4">
                    <Button
                        variant={"secondary"}
                        className="flex-1 rounded-[3px]"
                        onClick={() => {
                            // Handle Google OAuth
                            //   toast({
                            //     title: "Google Sign In",
                            //     description: "Redirecting to Google...",
                            //   });
                        }}
                    >
                        <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="currentColor"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="currentColor"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="currentColor"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        Google
                    </Button>
                    <Button
                        variant={"secondary"}
                        className="flex-1 rounded-[3px]"
                        onClick={() => {
                            // Handle Google OAuth
                            //   toast({
                            //     title: "Google Sign In",
                            //     description: "Redirecting to Google...",
                            //   });
                        }}
                    >
                        <span>
                            <Facebook />
                        </span>
                        Facebook
                    </Button>
                </div>
            </div>

            <div className="text-center text-sm">
                <p className="text-gray-400">
                    Don't have an account?{' '}
                    <Link
                        href="/sign-up"
                        className="font-medium text-primary hover:text-primary/80"
                    >
                        Registration
                    </Link>
                </p>

            </div>
        </div>
    );
}