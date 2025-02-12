import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        pink: {
          50: "rgb(255, 228, 233)",
          100: "rgb(255, 204, 213)",
          150: "rgb(255, 168, 177)",
          200: "rgb(247, 164, 192)",
          250: "rgb(239, 91, 137)",
          300: "rgb(213, 69, 130)",
          350: "rgb(182, 115, 142)",
        },
        redish: {
          100: "rgb(250, 83, 116)"
        },
        orange: {
          200: "rgb(255, 145, 77)",
          300: "rgb(252, 126, 67)",
        }
      },
    },
  },
});
