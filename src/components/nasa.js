import { useState, useEffect, useCallback } from 'react'

const apiKey = "v2JdcVcfkqrJftcBRtTryJbpBnpxnrrhN2KRkQal"
const start_date = "2021-08-08"
const end_date = "2021-09-08"

const uri = `https://api.nasa.gov/planetary/apod?start_date=${start_date}&api_key=${apiKey}`
export default function Nasa() {

    const [nasaRes, setNasaRes] = useState([])

    const nasaAPI = async () => {
        try {
            const nasaResponse = await fetch(uri)
            const nasaJSON = await nasaResponse.json()
            console.log(nasaJSON)
            if (nasaJSON.length >= 0) {
                setNasaRes(nasaJSON)
            }
        } catch (error) {
            throw error
        }
    }

    const memoizedCallback = useCallback(() => {
            nasaAPI()
        },
        [],
      );

    useEffect(() => {
        memoizedCallback()
    }, [])

    return (
        <>
            Hallo Aku Nasa
            {nasaRes.map(e => {
                return (
                    <>
                        <div className="Images" >{e.title}</div>
                        <img  style={{width: "100px"}} src={e.url}></img>
                    </>
                )
            })}
        </>
    )
}