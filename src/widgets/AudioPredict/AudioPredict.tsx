"use client"
import React, { useState } from "react"
import * as Styled from "./ui/AudioPredict.styles"
import { Button } from "@/shared/ui"
import { AudioComponent, FileUploader } from "@/shared/assets"
import { RequestMessage } from "@/shared/assets/RequestMessage/RequestMessage"
import { CircularProgress, Typography } from "@mui/material"
import { sendCommand } from "@/entities/Command/api/command.api"

export const AudioPredict = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null) // Теперь аудио хранится как файл
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [errorText, setErrorText] = useState("")
  const [error, setError] = useState(false)

  const sendData = () => {
    if (!!audioFile || !!file) {
      setLoading(true)
      const formData = new FormData()
      const audio = !!audioFile ? audioFile : file
      formData.append("file", audio)
      //@ts-ignore
      sendCommand(formData)
        .then(res => {
          setErrorText("Успешно")
          setError(false)
        })
        .catch(err => {
          setErrorText("Ошибка")
          setError(true)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }

  return (
    <Styled.MainContainer>
      <AudioComponent disabled={!!file} setAudio={setAudioFile} />
      <Typography sx={{ color: "#FFF" }} variant={"body1"} fontSize={"medium"} fontWeight={"medium"}>
        ИЛИ
      </Typography>
      <FileUploader file={file} setFile={setFile} disabled={!!audioFile} />
      <Styled.SendDataContainer>
        <Button disabled={!(!!audioFile || !!file)} variant={"contained"} color={"additional"} onClick={sendData}>
          Отправить
        </Button>
        {loading && <CircularProgress sx={{ color: "#FFF", opacity: 0.7 }} size={40} />}
        {!loading && errorText.length > 0 && <RequestMessage error={error} text={errorText} />}
      </Styled.SendDataContainer>
    </Styled.MainContainer>
  )
}
