// src/components/forms/form-input.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, error, hint, required, ...props }, ref) => {
    const inputId = React.useId();

    return (
      <div className="space-y-2">
        <Label htmlFor={inputId} className="text-normal font-medium text-black">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        <Input
          id={inputId}
          className={cn(
            "border border-primary rounded-[3px] text-gray-400",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          ref={ref}
          {...props}
        />
       
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';