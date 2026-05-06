import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'inline-flex items-center justify-center',
    'rounded px-4 py-2',
    'font-medium text-white',
    'cursor-pointer outline-none',
    'transition-colors',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  variants: {
    variant: {
      primary: 'bg-blue-500 hover:bg-blue-700 disabled:hover:bg-blue-500',
      secondary: 'bg-gray-500 hover:bg-gray-700 disabled:hover:bg-gray-500',
      danger: 'bg-red-500 hover:bg-red-700 disabled:hover:bg-red-500',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonVariant = NonNullable<VariantProps<typeof button>['variant']>

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>

export default function Button({
  variant,
  className,
  ...props
}: ButtonProps) {
  return <button className={button({ variant, className })} {...props} />
}
