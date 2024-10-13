import { axiosInstance } from "@/shared/api/axiosInstance"

export const sendCommand = async (data: FormData) =>
  await axiosInstance.post("/command/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })

export const fetchCommands = async (train: number) => await axiosInstance.get(`/command/?train_id=${train}`)

export const addCommandClass = async (name: string, value: string) =>
  await axiosInstance.put("/command/", {
    command_name: name,
    command_value: value,
  })
