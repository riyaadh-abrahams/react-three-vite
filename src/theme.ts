import { extendTheme } from "@chakra-ui/react";

const options = {
  styles: {
    global: {
      "html, body, #root": {
        height: "100vh",
      },
    },
  },
};

const theme = extendTheme(options);

export default theme;
