import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				'2xl': '1200px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				serif: ['Lora', ...defaultTheme.fontFamily.serif],
				display: ['Lora', ...defaultTheme.fontFamily.serif],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				brand: {
					olive: '#606c38',
					black: '#283618',
					cornsilk: '#fefae0',
					clay: '#dda15e',
					copper: '#bc6c25',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			boxShadow: {
				soft: '0 10px 40px -15px rgba(40, 54, 24, 0.25)',
				glow: '0 8px 30px rgba(188, 108, 37, 0.35)',
			},
			backgroundImage: {
				'grainy-paper':
					'radial-gradient(circle at 10% 20%, rgba(188,108,37,0.08), transparent 25%), radial-gradient(circle at 90% 10%, rgba(96,108,56,0.08), transparent 25%), radial-gradient(circle at 50% 90%, rgba(221,161,94,0.08), transparent 25%)',
			},
			keyframes: {
				'shy-fade': {
					from: { opacity: 0, transform: 'translateY(12px)' },
					to: { opacity: 1, transform: 'translateY(0)' },
				},
			},
			animation: {
				'shy-fade': 'shy-fade 0.65s ease forwards',
			},
		},
	},
	plugins: [animate, typography],
};

export default config;
