"use client"
import React, { useState } from "react"
import { AudioRecorder } from "react-audio-voice-recorder"
import { useStateType } from "@/shared/util/useStateType"
import CloseIcon from "@mui/icons-material/Close"
import { styled } from "@mui/material/styles"
import WebMToWavConverter from "webm-to-wav-converter" // Импортируем библиотеку для конвертации

export const AudioComponent = ({ setAudio, disabled }: { setAudio: useStateType<File | null>; disabled: boolean }) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null)

  async function onCompleteRecord(blob: Blob) {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl)
      setAudio(null)
    }
    const webmFile = new File([blob], "recording.webm", { type: "audio/webm" }) // Создаем WebM файл
    setAudioUrl(URL.createObjectURL(webmFile)) // Устанавливаем URL для проигрывания аудио
    setAudio(webmFile) // Передаем WebM файл

    try {
      // Конвертируем WebM в WAV
      const wavBlob = await WebMToWavConverter.getWaveBlob(webmFile, true, { sampleRate: 16000 })
      const wavFile = new File([wavBlob], "recording.wav", { type: "audio/wav" }) // Создаем WAV файл
      setAudio(wavFile) // Передаем WAV файл
    } catch (error) {
      console.error("Ошибка при конвертации:", error)
    }
  }

  const deleteFile = () => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl)
      setAudioUrl(null)
      setAudio(null)
    }
  }

  return (
    <div key={audioUrl} style={disabled ? { pointerEvents: "none", opacity: 0.5 } : {}}>
      <AudioRecorder
        onRecordingComplete={onCompleteRecord} // Вызываем onCompleteRecord при завершении записи
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        onNotAllowedOrFound={err => console.table(err)} // Обрабатываем ошибки
        downloadFileExtension="wav" // Расширение файла для скачивания
        mediaRecorderOptions={{
          audioBitsPerSecond: 128000, // Настройки битрейта
        }}
      />
      {!!audioUrl && (
        <AudioContainer>
          <audio key={`${audioUrl}_1`} controls>
            <source src={audioUrl} />
          </audio>
          <CloseIcon sx={{ cursor: "pointer", color: "#FFF" }} onClick={deleteFile} />
        </AudioContainer>
      )}
    </div>
  )
}

const AudioContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: theme.spacing(6),
  marginTop: theme.spacing(4),
}))
