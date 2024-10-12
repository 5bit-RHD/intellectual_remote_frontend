import React from "react"
import { styled } from "@mui/material/styles"
import DoneIcon from "@mui/icons-material/Done"
import { Typography, useTheme } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

export const MessageMapperDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: theme.spacing(3),
}))

export const MessageMapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: theme.spacing(3),
}))

export const RequestMessage = ({ error, text }: { error: boolean; text: string }) => {
  const theme = useTheme()

  return (
    <MessageMapperDiv>
      <MessageMapper>
        {!error && <DoneIcon sx={{ color: theme.palette.success.main }} />}
        {error && <CloseIcon sx={{ color: theme.palette.error.main }} />}
        <Typography sx={{ color: "#FFF" }} variant={"body1"} fontWeight={"small"} fontSize={"small"}>
          {text}
        </Typography>
      </MessageMapper>
    </MessageMapperDiv>
  )
}
