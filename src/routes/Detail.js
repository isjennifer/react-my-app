import { useParams } from "react-router-dom";

function Detail () {
    const x = useParams();
    console.log(x)
    // console에는 해당 영화의 id가 뜬다. (url에 표시되는 id)
    return <h1>Detail</h1>
}

export default Detail;