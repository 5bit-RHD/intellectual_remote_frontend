"use client"
import * as Styled from "./Solution.styles"
import { AudioPredict, Commands } from "@/widgets"

export default function Home() {
  return (
    <Styled.Page>
      <Styled.ContentContainer>
        <AudioPredict />
        <Commands />
      </Styled.ContentContainer>
    </Styled.Page>
  )
}
