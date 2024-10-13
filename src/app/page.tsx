"use client"
import { Box, Tab, Tabs, Typography } from "@mui/material"
import React, { useState } from "react"
import * as Styled from "./Page.styles"
import { AudioPredict, Commands } from "@/widgets"
import { Button } from "@/shared/ui"

export default function Home() {
  const goToCommands = () => {
    window.location.href = "/solution"
  }

  return (
    <Styled.Page>
      <Styled.ContentContainer>
        <Typography
          sx={{ color: "#FFF", width: "50%", textAlign: "center" }}
          variant={"body1"}
          fontSize={"medium"}
          fontWeight={"medium"}
        >
          Команда 5bits разработала инновационное решение для точного распознавания голосовых команд с динамическим
          добавлением новых классов.
        </Typography>
        <Button sx={{ width: "300px" }} variant={"outlined"} color={"additional"} onClick={goToCommands}>
          Определить команду
        </Button>
      </Styled.ContentContainer>
    </Styled.Page>
  )
}
