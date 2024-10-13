"use client"
import * as Styled from "./ui/Header.styles"
import Logo from "@/images/Logo.svg"
import { Typography, useTheme } from "@mui/material"
import LogoRsv from "@/images/rsv_logo.svg"
import Image from "next/image"
import { useEffect, useState } from "react"

export const Header = () => {
  const [activeItem, setActiveItem] = useState("/")
  const theme = useTheme()

  useEffect(() => {
    setActiveItem(window.location.pathname)
  }, [])

  const handleChangePages = (item: string) => {
    setActiveItem(item)
  }

  return (
    <Styled.StyledAppBar>
      <Styled.StyledToolbar>
        <Styled.ImageContainer>
          <Styled.LogoContainer href={"/"}>
            <Styled.StyledImage src={Logo} />
          </Styled.LogoContainer>
        </Styled.ImageContainer>
        <Styled.FeaturesContainer>
          <Styled.TextItem
            href={"/"}
            sx={{ border: activeItem === "/" ? "2px solid #FFF" : "none" }}
            onClick={() => handleChangePages("/")}
          >
            <Typography variant={"body1"} fontSize={"medium"} fontWeight={"medium"}>
              ГЛАВНАЯ
            </Typography>
          </Styled.TextItem>
          <Styled.TextItem
            href={"/solution"}
            sx={{ border: activeItem === "/solution" ? "2px solid #FFF" : "none" }}
            onClick={() => handleChangePages("/solution")}
          >
            <Typography variant={"body1"} fontSize={"medium"} fontWeight={"medium"}>
              РЕШЕНИЕ
            </Typography>
          </Styled.TextItem>
          <Styled.TextItem
            href={"/presentation"}
            sx={{ border: activeItem === "/presentation" ? "2px solid #FFF" : "none" }}
            onClick={() => handleChangePages("/presentation")}
          >
            <Typography variant={"body1"} fontSize={"medium"} fontWeight={"medium"}>
              ПРЕЗЕНТАЦИЯ
            </Typography>
          </Styled.TextItem>
        </Styled.FeaturesContainer>
        <Styled.ImageContainer>
          <Image src={LogoRsv} alt={"logo rsv"} style={{ height: "100%" }} />
        </Styled.ImageContainer>
      </Styled.StyledToolbar>
    </Styled.StyledAppBar>
  )
}
