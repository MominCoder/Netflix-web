import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath, title}) => {
  return (
    <figure className="w-48">
        <img className="w-[100%]" src={IMG_CDN_URL+posterPath} alt={title} />
    </figure>
  )
}

export default MovieCard