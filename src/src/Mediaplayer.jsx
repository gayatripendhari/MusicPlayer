import React , {useRef,useState} from 'react'
import audio1 from "./assets/audio1.mp3";
import audio2 from "./assets/audio2.mp3";
import audio3 from "./assets/audio3.mp3";
import audio4 from "./assets/audio4.mp3";
import audio5 from "./assets/audio5.mp3";
import style from "./Style.module.css";
const Mediaplayer = () => {
  let [index,setIndex] = useState(0);
  let playlist = [audio1,audio2,audio3,audio4,audio5]
  let audioRef=useRef();

  let handlePlay = () =>{
    audioRef.current.play();
  }

  let handlePause= () =>{
    audioRef.current.pause();
  }

  let handleChange = () => {
    // audioRef.current.src=audio2;
    // audioRef.current.src=playList(index);
    const nextIndex = (index + 1) % playlist.length; 
    setIndex(nextIndex); 
    audioRef.current.src = playlist[nextIndex]; 
    audioRef.current.play(); 
  }
  return (
        <div className={style.Mplayer}>
        <audio src={audio1} controls ref={audioRef} className={style.music}></audio>
        <br/><br/>
        <section className={style.btn}>
          <button onClick={handlePlay}> Play </button>
          <button onClick={handlePause} className={style.btn1}>Pause</button>
          <button onClick={handleChange}>Change</button>
        </section>
    </div>
  )
}

export default Mediaplayer