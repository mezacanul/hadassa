"use client"

import { ChakraProvider } from "@chakra-ui/react"
import {system} from "../../style/theme"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider forcedTheme="light" {...props} />
    </ChakraProvider>
  )
}