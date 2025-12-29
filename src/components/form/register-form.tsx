// src/components/forms/register-form.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { FormInput } from './form-input';
import { registerSchema, type RegisterFormData } from '@/lib/validations/auth';
import { useState } from 'react';
import Link from 'next/link';

export function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            mobile: '+86',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    async function onSubmit(data: RegisterFormData) {
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            //   toast({
            //     title: "Account created successfully!",
            //     description: "You can now log in to your account.",
            //   });

            // Redirect or handle success
            console.log('Registration data:', data);
        } catch (error) {
            //   toast({
            //     title: "Registration failed",
            //     description: "Please try again later.",
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
                    Register
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Join our rental property platform
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    <FormInput
                        label="First Name"
                        placeholder="Enter Your First Name"
                        {...form.register('firstName')}
                        error={form.formState.errors.firstName?.message}
                        required
                    />
                    <FormInput
                        label="Last Name"
                        placeholder="Enter Your Last Name"
                        {...form.register('lastName')}
                        error={form.formState.errors.lastName?.message}
                        required
                    />


                    <FormInput
                        label="Mobile"
                        type="tel"
                        placeholder="+86 010xxxxxxxxxx"
                        {...form.register('mobile')}
                        error={form.formState.errors.mobile?.message}
                        required
                    />

                    <FormInput
                        label="Email"
                        type="email"
                        placeholder="Enter Your Mail"
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
                        hint="at least 8 characters"
                        required
                    />

                    <FormInput
                        label="Re-Enter Password"
                        type="password"
                        placeholder="at least 8 characters"
                        {...form.register('confirmPassword')}
                        error={form.formState.errors.confirmPassword?.message}
                        hint="at least 8 characters"
                        required
                    />

                    <Button
                        type="submit"
                        className="w-full rounded-[3px] bg-primary hover:bg-primary/80 text-white"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating account...' : 'Create Account'}
                    </Button>

                    <div className="text-center text-sm">
                        <p className="text-gray-400">
                            Already Register?{' '}
                            <Link
                                href="/sign-in"
                                className="font-medium text-primary hover:text-primary/80"
                            >
                                Sign In
                            </Link>
                        </p>

                    </div>
                </form>
            </Form>
        </div>
    );
}