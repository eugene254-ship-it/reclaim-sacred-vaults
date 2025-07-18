import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'serif': ['Crimson Text', 'serif'],
				'sans': ['Inter', 'sans-serif'],
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
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			backgroundImage: {
				'gradient-cosmic': 'var(--gradient-cosmic)',
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-mystic': 'var(--gradient-mystic)',
				'gradient-earth': 'var(--gradient-earth)',
			},
			boxShadow: {
				'cosmic': 'var(--shadow-cosmic)',
				'gold': 'var(--shadow-gold)',
				'mystic': 'var(--shadow-mystic)',
			},
			filter: {
				'constellation': 'var(--constellation-glow)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						filter: 'drop-shadow(0 0 8px hsl(45 100% 70% / 0.3))',
						transform: 'scale(1)'
					},
					'50%': { 
						filter: 'drop-shadow(0 0 20px hsl(45 100% 70% / 0.6))',
						transform: 'scale(1.05)'
					}
				},
				'constellation-appear': {
					'0%': { opacity: '0', transform: 'scale(0.8)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'text-reveal': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(30px)',
						filter: 'blur(10px)'
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0px)',
						filter: 'blur(0px)'
					}
				},
				'sacred-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'constellation-appear': 'constellation-appear 1s ease-out',
				'text-reveal': 'text-reveal 1s ease-out',
				'sacred-spin': 'sacred-spin 20s linear infinite',
			},
			transitionTimingFunction: {
				'sacred': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'mystical': 'cubic-bezier(0.23, 1, 0.32, 1)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
