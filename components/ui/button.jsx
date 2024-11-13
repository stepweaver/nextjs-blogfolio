import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-sm text-base font-semibold ring-offset-white transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-green-500 text-primary hover:bg-green-600',
        primary: 'bg-primary text-white',
        outline: 'border border-green-500 bg-transparent text-green-500 hover:bg-green-500'
      },
      size: {
        default: 'h-[44px] px-6',
        md: 'h-[48px] px-6',
        lg: 'h-[56px] px-8 text-sm uppercase tracking-[2px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };