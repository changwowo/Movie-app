import fetch from "node-fetch"
import { VercelRequest, VercelResponse } from '@vercel/node'
const { APIKEY } = process.env

export default async function handler(request : VercelRequest  , response : VercelResponse ){
  // any로 하면 금방끝나는데 슈발 ㅠ 근데 타입 쓸려면 안됨
  const { title , page , id} = JSON.parse(request.body)
  const url = id ? `https://omdbapi.com?apikey=${APIKEY}&i=${id}&plot=full`: `https://omdbapi.com?apikey=${APIKEY}&s=${title}&page=${page}`
  const res = await fetch(url)
  const json = await res.json()
  response.status(200).json(json)
}