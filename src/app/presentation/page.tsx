import { Typography } from "@mui/material"

export default function Presentation() {
  return (
    <div
      style={{
        width: "100%",
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        gap: "44px",
        justifyContent: "flex-start",
        marginTop: "75px",
      }}
    >
      <Typography sx={{ color: "#FFF" }} variant={"body1"} fontSize={"medium"} fontWeight={"medium"}>
        <a href={"https://github.com/5bit"} target={"_blank"}>
          https://github.com/5bit
        </a>{" "}
        - Ссылка на репозиторий;
      </Typography>
      <Typography sx={{ color: "#FFF" }} variant={"body1"} fontSize={"medium"} fontWeight={"medium"}>
        <a
          target={"_blank"}
          href={"https://drive.google.com/drive/folders/1Y33C_3jg6rVTn1ERZqskFF7mgmBrEimH?usp=sharing"}
        >
          https://drive.google.com/drive/folders/1Y33C_3jg6rVTn1ERZqskFF7mgmBrEimH?usp=sharing
        </a>{" "}
        - Ссылка на скринкаст;
      </Typography>
      <Typography sx={{ color: "#FFF" }} variant={"body1"} fontSize={"medium"} fontWeight={"medium"}>
        <a target={"_blank"} href={"https://disk.yandex.ru/d/12bT7dypbjD1ZQ"}>
          https://disk.yandex.ru/d/12bT7dypbjD1ZQ
        </a>{" "}
        - Ссылка на модель;
      </Typography>
    </div>
  )
}
