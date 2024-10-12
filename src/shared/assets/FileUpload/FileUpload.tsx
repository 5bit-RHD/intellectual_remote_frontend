"use client"
import React, { useRef } from "react"
import * as Styled from "./FileUpload.styles"
import { Typography, useTheme } from "@mui/material"
import { Button } from "@/shared/ui"
import CloseIcon from "@mui/icons-material/Close"

export const FileUploader = ({ file, setFile, title, errors, disabled }) => {
  const theme = useTheme()
  const inputRef = useRef(null)

  function handleChangeFile(e) {
    setFile(e.target.files[0])
  }

  function deleteFile() {
    setFile(null)
  }

  function handleClick() {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <>
      <input accept={".wav"} type="file" ref={inputRef} style={{ display: "none" }} onChange={handleChangeFile} />
      {!file ? (
        <Button color={"additional"} variant={"contained"} onClick={handleClick} disabled={disabled}>
          {title || "Прикрепить файл"}
        </Button>
      ) : (
        <Styled.FileUploadedContainer>
          <Typography sx={{ color: "#FFF" }}>{file.name}</Typography>
          <Button variant={"outlined"} color={"additional"} onClick={handleClick} disabled={disabled}>
            Загрузить новый файл
          </Button>
          <CloseIcon sx={{ cursor: "pointer", color: "#FFF" }} onClick={deleteFile} />
        </Styled.FileUploadedContainer>
      )}
    </>
  )
}
