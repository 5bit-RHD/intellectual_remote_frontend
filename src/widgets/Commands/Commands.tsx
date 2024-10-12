"use client"
import React, { ChangeEvent, useEffect, useState } from "react"
import * as Styled from "./ui/Commands.styled"
import { Command, CommandsTable, fetchCommands } from "@/entities/Command"
import { AxiosResponse } from "axios"
import { Button, TextField } from "@/shared/ui"
import { RequestMessage } from "@/shared/assets/RequestMessage/RequestMessage"

export const Commands = () => {
  const [commands, setCommands] = useState<Command[]>([])
  const [newCommand, setNewCommand] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [text, setText] = useState("")

  useEffect(() => {
    let interval: NodeJS.Timeout

    interval = setInterval(() => {
      fetchCommands(Number(1)).then((res: AxiosResponse<Command[]>) => {
        if (commands.length > res.data.length || commands.length === 0) {
          setCommands(res.data.sort((a, b) => (a.id >= b.id ? -1 : 1)))
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  function handleChangeTextField(x: ChangeEvent<HTMLInputElement>) {
    setNewCommand(x.target.value)
  }

  function sendRequest() {
    console.log("send")
  }

  return (
    <Styled.CommandsMainDiv>
      <Styled.AddCommandDiv>
        <TextField
          onChange={handleChangeTextField}
          color={"#FFF"}
          variant={"outlined"}
          label={"Введите новую команду"}
          value={newCommand}
        />
        <Styled.AddCommandRequest>
          <Button onClick={sendRequest} variant={"outlined"} color={"additional"}>
            Добавить команду
          </Button>
          {text.length > 0 && <RequestMessage error={error} text={text} />}
        </Styled.AddCommandRequest>
      </Styled.AddCommandDiv>
      <CommandsTable commands={commands} />
    </Styled.CommandsMainDiv>
  )
}
