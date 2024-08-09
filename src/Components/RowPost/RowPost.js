import React, { useState,useEffect } from 'react'
import './RowPost.css';
import {imageUrl,API_KEY} from '../../constant/Constant' 
import axios from '../../axioss';
import YouTube from 'react-youtube';

const RowPost = (props) => {
  const [movie,Setmovie] = useState([]);
  // const [urlId,setUrlId] = useState('')
  useEffect(() => {
     axios.get(props.url).then((response)=>{
      console.log(response.data.results);
      Setmovie(response.data.results)
     }).catch(error=>{
      alert('network error')
     })
  }, []);
  // const opts = {
  //   height: '390',
  //   width: '100%',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 0,
  //   },
  // };
  // const handlVideo = (id)=>{
  //   console.log(id);
  //   axios.get(`3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  //     console.log(response.data);
  //   })
  // }
  return (
    <div className='row'>
        <h2 className='row-title'>{props.title}</h2>
       <div className="posters">
        {
          movie.map((obj,index)=>(

            <img  className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" key={index} />
          ))
        }
       </div>
      {/* <YouTube videoId="2g811Eo7K8U" opts={opts} /> */}
    </div>
  )
}

export default RowPost