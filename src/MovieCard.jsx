// this jsx file is the custom component made by us such that each and every time for each movie we dont have todefine ckassName movie each time
import React from 'react';
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    // to avoid writing the props.Year and those things each and every time aboove we use the destructing of the props
    return(
<div className="movie" key={imdbID}>
<div>
    <p>
        {Year}
    </p>
</div>
<div>
    <img src={Poster!=='N/A'?Poster:'https://via.placeholder.com/400'} alt={Title}/>
{/* if there is no image make sure to add an 400*400 image */}
</div>
<div>
    <span>
        {Type}
        {/* it can be a tv show as well */}
    </span>
    <h3>{Title}</h3>
</div>
</div>
    );
}

export default MovieCard;