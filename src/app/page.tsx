'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { AppBar, Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import Nav from "./home_page_asset/nav_bar"
import ContactFormWithSocialButtons from './home_page_asset/form'

export default function page() {
  return (
    <ChakraProvider><Nav></Nav><ContactFormWithSocialButtons></ContactFormWithSocialButtons></ChakraProvider> 
  )
}