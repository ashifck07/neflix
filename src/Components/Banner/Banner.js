import React, { useEffect, useState } from 'react'
import './Banner.css';
import {API_KEY,imageUrl} from '../../constant/Constant';
import axios from "../../axioss";

const Banner = () => {
  const [movie,Setmovie] = useState();
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
      Setmovie(res.data.results[2]);
    })
    
  }, []);
  return (
    <div className='banner'
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}>
      
        <div className='content'>
            <h1 className='title'>{movie?movie.title:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>play</button>
                <button className='button'>my list</button>
            </div>
            <h1 className='discription'>{movie?movie.overview:""}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner