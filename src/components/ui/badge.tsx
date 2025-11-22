import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
	'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors',
	{
		variants: {
			variant: {
				default: 'border-transparent bg-secondary/80 text-secondary-foreground shadow-soft',
				neutral: 'border-transparent bg-muted text-muted-foreground',
				outline: 'border-primary/40 text-foreground',
				sunlit: 'border-transparent bg-accent text-foreground shadow-glow',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
