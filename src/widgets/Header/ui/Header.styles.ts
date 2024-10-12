"use client"
import { styled } from "@mui/material/styles"
import { AppBar, Toolbar, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: "100%",
  zIndex: 1200,
  height: 75,
  backgroundColor: "#0B0B0D",
  boxShadow: "0 2px 4px rgb(0 0 0 / 5%)",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}))

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(1),
}))

export const StyledImage = styled(Image)(({ theme }) => ({
  height: "100%",
  width: "auto",
}))

export const ProjectName = styled(Typography)(({ theme }) => ({
  color: "#1E4E79",
}))

export const FeaturesContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: theme.spacing(15),
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(2),
  },
}))

export const LogoContainer = styled(Link)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "100%",
  marginRight: "auto",
  justifySelf: "flex-start",
  gap: theme.spacing(1),
  textDecoration: "none",
}))

export const ImageContainer = styled("div")(({ theme }) => ({
  width: "30%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  height: "100%",
  opacity: 0.7,
}))

export const TextItem = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "#FFF",
  opacity: 0.7,
  borderRadius: theme.spacing(3),
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
}))

export const activeTextItem = () => {
  return { border: "2px solid #FFF", borderRadius: "4px" }
}
