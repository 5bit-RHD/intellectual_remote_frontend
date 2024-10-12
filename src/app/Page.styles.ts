"use client"
import { styled } from "@mui/material/styles"
import { Box } from "@mui/material"

export const Page = styled("div")(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: theme.spacing(22),
  gap: theme.spacing(10),
}))

export const ContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(10),
}))
