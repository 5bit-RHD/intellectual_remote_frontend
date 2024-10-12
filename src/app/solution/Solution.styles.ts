"use client"
import { styled } from "@mui/material/styles"

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
  flexDirection: "row",
  width: "100%",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: theme.spacing(52),
  [theme.breakpoints.down("lg")]: {
    gap: theme.spacing(16),
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}))
