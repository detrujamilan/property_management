/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                'pblack': ['PBlack', 'sans-serif'],
                'pbold': ['PBold', 'sans-serif'],
                'pextrabold': ['PExtraBold', 'sans-serif'],
                'pextralight': ['PExtraLight', 'sans-serif'],
                'plight': ['PLight', 'sans-serif'],
                'pmedium': ['PMedium', 'sans-serif'],
                'pregular': ['PRegular', 'sans-serif'],
                'psemibold': ['PSemiBold', 'sans-serif'],
                'pthin': ['PThin', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                pattensBlue: "#D8E3FF",
                hawkesBlue: "#EFF3FE",
                blueRibbon: "#006AFF",
                bigStone: "#161B3D",
                doveGray: "#646262",
                catskillWhite: "#F8FAFC",
                aquaHaze: "#F6F8FA",
                zumthor: "#E4EBFF",
                orange: "#FF6625",
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            }
        }
    },
    plugins: [
        function ({addUtilities, theme}) {
            addUtilities({
                '.headline': {
                    fontFamily: theme("fontFamily.pbold"),
                    fontSize: "26.6667px",
                    lineHeight: "37px",
                    color: theme("colors.bigStone"),
                },
                '.subscription-plan-class': {
                    fontFamily: theme("fontFamily.pmedium"),
                    fontSize: "1.02vw",
                },
                '.headline-text': {
                    fontFamily: theme("fontFamily.pregular"),
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: theme("colors.bigStone"),
                },
                '.headline-text-bold': {
                    fontFamily: theme("fontFamily.pmedium"),
                    fontSize: "1.2vw",
                    lineHeight: "28px",
                    color: theme("colors.bigStone"),
                },
                '.metaText': {
                    fontFamily: theme("fontFamily.pregular"),
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: theme("colors.doveGray"),
                }
            });
        },],
}

