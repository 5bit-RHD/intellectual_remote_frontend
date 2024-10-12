import { axiosInstance } from "@/shared/api/axiosInstance"

export const sendCommand = async (data: FormData) =>
  await axiosInstance.post("/command/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })

export const sendZipCommands = async (data: FormData) =>
  await axiosInstance.post("/commands/zip/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })

export const fetchCommands = async (train: number) => await axiosInstance.get(`/command/?train_id=${train}`)
