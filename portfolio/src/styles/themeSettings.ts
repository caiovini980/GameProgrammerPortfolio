import { createTheme } from '@mui/material/styles';

declare module "@mui/material/Button/Button" {
    interface ButtonPropsVariantOverrides {
        headerButton: true;
    }
}

export const darkTheme = createTheme ({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "headerButton" },
                    style: {
                        color: "#f4f4f4" ,
                        fontFamily: "Concert One",
                        fontWeight: "bold",
                        fontSize: "1em"
                    },
                },
            ]
        }
    },
});