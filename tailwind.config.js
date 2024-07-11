module.exports = {
    content: ["app/**/*.php", "resources/**/*.{html,js,vue,php}"],
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: {
                "blue-gradient-radial": "radial-gradient(circle at 7% 5%, #21385e, #16243c 89%);",
                "blue-dark-gradient-radial": "linear-gradient(to bottom right, #223b6a, #101725 600px)"
            }
        },

        colors: {
            transparent: "transparent",
            inherit: "inherit",

            black: "#222222",
            "deep-black": "black",

            "grey-100": "rgb(216, 227, 238)",
            "grey-200": "#F4F4F4",
            "grey-300": "#F7F8FC",
            "grey-400": "#EBEDF1",
            "grey-500": "#EDEDED",
            "grey-600": "#BAD9FC",
            "grey-700": "#BAC6CC",
            "grey-800": "#78909C",
            "grey-900": "#222222", // also black

            // Deprecated
            grey: "#CCCCCC",

            white: "#ffffff",

            "red-darkest": "#3b0d0c",
            "red-darker": "#621b18",
            "red-dark": "#cc1f1a",
            red: "#e3342f",
            "red-light": "#F095A1",
            "red-lighter": "#f9acaa",
            "red-lightest": "#fcebea",

            "orange-darkest": "#462a16",
            "orange-darker": "#613b1f",
            "orange-dark": "#de751f",
            orange: "#f6993f",
            "orange-light": "#faad63",
            "orange-lighter": "#fcd9b6",
            "orange-lightest": "#fff5eb",

            "yellow-darkest": "#453411",
            "yellow-darker": "#684f1d",
            "yellow-dark": "#f5a623",
            yellow: "#ffed4a",
            "yellow-light": "#fff382",
            "yellow-lighter": "#fff9c2",
            "yellow-lightest": "#fcfbeb",

            "green-darkest": "#0f2f21",
            "green-darker": "#1a4731",
            "green-dark": "#1aab8b",
            green: "#92D048",
            "green-light": "#51d88a",
            "green-lighter": "#a2f5bf",
            "green-lightest": "#F3F9E9",

            "teal-darkest": "#0d3331",
            "teal-darker": "#20504f",
            "teal-dark": "#38a89d",
            teal: "#4dc0b5",
            "teal-light": "#64d5ca",
            "teal-lighter": "#a0f0ed",
            "teal-lightest": "#e8fffe",

            "blue-darkest": "#182334",
            "blue-darker": "#395177",
            "blue-800": "#344a71",
            "blue-900": "#0d131d",
            "blue-1000": "#12233A",
            "blue-dark": "#2779bd",
            blue: "#328af1",
            "blue-light": "#21c8f6",
            "blue-lighter": "#ECF3FC",
            "blue-300": "#CCE4FD",
            "blue-200": "#F2FAFF",
            "blue-100": "#F6F9FF",
            "blue-lightest": "#f2f9ff",

            "panel-900": "#0d131d",
            "panel-800": "#18273f",
            "panel-700": "#19304e",
            "panel-600": "#203759",
            "panel-500": "#25416a",

            turquoise: "#00adec",

            "indigo-darkest": "#191e38",
            "indigo-darker": "#2f365f",
            "indigo-dark": "#5661b3",
            indigo: "#6574cd",
            "indigo-light": "#7886d7",
            "indigo-lighter": "#b2b7ff",
            "indigo-lightest": "#e6e8ff",

            "purple-darkest": "#21183c",
            "purple-darker": "#382b5f",
            "purple-dark": "#794acf",
            purple: "#9561e2",
            "purple-light": "#a779e9",
            "purple-lighter": "#d6bbfc",
            "purple-lightest": "#f3ebff",

            laracasts: "#1644ad",
            "laracasts-light": "#328bf2",
            frameworks: "#EC454F",
            "frameworks-light": "#F44881",
            testing: "#1AAB8B",
            "testing-light": "#6EDCC4",
            techniques: "#637BFF",
            "techniques-light": "#21C8F6",
            tooling: "#8B60ED",
            "tooling-light": "#B372BD",
            languages: "#F19A1A",
            "languages-light": "#FFC73C",
            devops: "#253D63",
            "devops-light": "#A1B6E5"
        },

        screens: {
            mobile: { max: "768px" },
            phone: { max: "736px", orientation: "portrait" },
            sm: { max: "992px" },
            tablet: { min: "500px" },
            md: "768px",
            lg: "992px",
            xl: "1200px",
            "2xl": "1350px",
            widescreen: "1500px",
            xlwidescreen: "1900px"
        },

        fontFamily: {
            sans: [
                "system-ui",
                "BlinkMacSystemFont",
                "-apple-system",
                "Segoe UI",
                "Roboto",
                "Oxygen",
                "Ubuntu",
                "Cantarell",
                "Fira Sans",
                "Droid Sans",
                "Helvetica Neue",
                "sans-serif"
            ],
            serif: [
                "Constantia",
                "Lucida Bright",
                "Lucidabright",
                "Lucida Serif",
                "Lucida",
                "DejaVu Serif",
                "Bitstream Vera Serif",
                "Liberation Serif",
                "Georgia",
                "serif"
            ],
            mono: ["Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
            muli: ["Muli", "sans-serif"],
            cabin: ["Cabin", "sans-serif"]
        },

        fontSize: {
            "3xs": ".6rem", // 9px
            "2xs": ".6666rem", // 10px
            xs: ".80rem", // 12px
            sm: ".867rem", // 13px
            md: ".934rem", // 14px
            base: "1rem", // 15px
            lg: "1.0666rem", // 16px
            "2lg": "1.134rem", // 17px
            "3lg": "1.2rem", // 18px
            xl: "1.33333rem", // 20px
            "2xl": "1.9rem", // 25.5px
            "3xl": "2.2rem", // 33px
            "4xl": "2.4rem", // 36px
            "5xl": "2.6666rem", // 40px
            "6xl": "3.333rem", // 50px
            "7xl": "5.333rem" // 80px
        },

        textColor: (theme) => theme("colors"),

        backgroundColor: (theme) => ({
            ...theme("colors")
        }),

        borderWidth: {
            DEFAULT: "1px",
            0: "0",
            2: "1.5px",
            3: "3px",
            4: "4px",
            6: "6px",
            8: "8px"
        },

        borderColor: (theme) => ({
            DEFAULT: theme("colors.grey-light"),
            ...theme("colors"),
            card: "rgba(120, 144, 156, 0.07);"
        }),

        borderRadius: {
            none: "0",
            sm: ".125rem",
            md: ".40rem",
            DEFAULT: ".25rem",
            lg: ".50rem",
            xl: ".934rem",
            "2xl": "1.25rem",
            "3xl": "2.8rem",
            full: "9999px"
        },

        boxShadow: {
            DEFAULT: "0 5px 11px rgba(36, 37, 38, 0.08)",
            md: "4px 4px 15px 0 rgba(36, 37, 38, 0.08)",
            lg: "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
            inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
            full: "0 5px 11px 0 rgba(36, 37, 38, 0.08)",
            none: "none"
        },

        zIndex: {
            auto: "auto",
            0: 0,
            10: 10,
            20: 20,
            30: 30,
            40: 40,
            50: 50,
            100: 100,
            500: 500,
            1000: 1000
        },

        opacity: {
            0: "0",
            2: ".02",
            3: ".03",
            4: ".04",
            5: ".05",
            7: ".07",
            10: ".10",
            13: ".13",
            15: ".15",
            20: ".20",
            25: ".25",
            30: ".30",
            40: ".40",
            50: ".50",
            60: ".60",
            70: ".70",
            75: ".75",
            85: ".85",
            90: ".90",
            97: ".97",
            100: "1"
        },

        fill: {
            current: "currentColor"
        },

        stroke: {
            current: "currentColor"
        }
    }
};
