import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Movie 함수에서 props로 부모의 것을 받아옴(coverImg, title, summary, genres를 부모의 것에서 받아옴)

function Movie ({coverImg, title, summary, genres, id}) {
    return (<div>
    <img src={coverImg} alt={title}/>
    <h2><Link to ={`/movie/${id}`}>{title}</Link></h2>
    <p>{summary}</p>
    {genres.map((g) => <li key={g}>{g}</li>)}
    </div>);
}

Movie.propTypes = {
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    // 장르는 array로 되어있고, array 안에는 string이므로
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    id : PropTypes.number.isRequired,
}

export default Movie;