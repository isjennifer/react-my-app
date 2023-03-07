import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail () {
    const { id } = useParams();
    const getMovie = async () => {
        const movieDetailJson = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(movieDetailJson)
        // useParams로 영화의 id를 받음 -> json 데이터에서 영화 id로 분류된 영화디테일json을 받아올수 있게됨
    }

    useEffect(() => {
        getMovie();
    }, [])

    return <h1>Detail</h1>
}


export default Detail;