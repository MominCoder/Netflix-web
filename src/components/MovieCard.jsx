import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath, title}) => {
  return (
    <figure className="md:w-48 w-32 cursor-pointer">
        <img className="w-[100%]" src={IMG_CDN_URL+posterPath} alt={title} draggable={false} />
    </figure>
  )
}

export default MovieCard