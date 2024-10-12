import { Command } from "@/entities/Command/models/commands.types"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { baseUrl, staticUrl } from "@/shared/config"

export const CommandsTable = ({ commands }: { commands: Command[] }) => {
  return (
    <TableContainer sx={{ width: "600px", background: "#00000", opacity: 0.7 }}>
      <Table sx={{ width: "520px" }} aria-label="Commands table">
        <TableHead sx={{ backgroundColor: "#00000" }}>
          <TableRow sx={{ backgroundColor: "#00000" }}>
            <TableCell sx={{ backgroundColor: "#00000", color: "#FFF", border: "1px solid #FFF" }}>ID</TableCell>
            <TableCell sx={{ backgroundColor: "#00000", color: "#FFF", border: "1px solid #FFF" }} align="right">
              Команда
            </TableCell>
            <TableCell sx={{ backgroundColor: "#00000", color: "#FFF", border: "1px solid #FFF" }} align="right">
              Класс
            </TableCell>
            <TableCell sx={{ backgroundColor: "#00000", color: "#FFF", border: "1px solid #FFF" }} align="right">
              Аттрибут
            </TableCell>
            <TableCell sx={{ backgroundColor: "#00000", color: "#FFF", border: "1px solid #FFF" }} align="right">
              Время
            </TableCell>
            <TableCell sx={{ backgroundColor: "#00000", color: "#FFF", border: "1px solid #FFF" }} align="right">
              Затраты памяти
            </TableCell>
            <TableCell sx={{ backgroundColor: "#00000", color: "#FFF", border: "1px solid #FFF" }} align="right">
              Файл
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {commands.map(row => (
            <TableRow key={row.id} sx={{}}>
              <TableCell
                sx={{ backgroundColor: "#00000", color: "#FFF", border: "1px solid #FFF" }}
                component="th"
                scope="row"
              >
                {row.id}
              </TableCell>
              <TableCell sx={{ backgroundColor: "#00000", color: "#FFF", border: "1px solid #FFF" }} align="right">
                {row.command}
              </TableCell>
              <TableCell sx={{ backgroundColor: "#00000", color: "#FFF", border: "1px solid #FFF" }} align="right">
                {row.label}
              </TableCell>
              <TableCell sx={{ backgroundColor: "#00000", color: "#FFF", border: "1px solid #FFF" }} align="right">
                {row.attribute}
              </TableCell>
              <TableCell sx={{ backgroundColor: "#00000", color: "#FFF", border: "1px solid #FFF" }} align="right">
                {row.time}
              </TableCell>
              <TableCell sx={{ backgroundColor: "#00000", color: "#FFF", border: "1px solid #FFF" }} align="right">
                {row.memory}
              </TableCell>
              <TableCell sx={{ backgroundColor: "#00000", color: "#FFF", border: "1px solid #FFF" }} align="right">
                <a
                  style={{ color: "#FFF", textDecoration: "none", cursor: "pointer" }}
                  href={`${staticUrl}${row.file}`}
                  target={"_blank"}
                >
                  Скачать файл
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
