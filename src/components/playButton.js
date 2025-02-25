import { useState } from 'react';
import './playButton.css'

function PlayButton({message, children, onPlay, onPause}){


    const [status, setStatus] = useState(false);

    // let status = false; // don't use this approach;
    function handleClick(e){
        e.stopPropagation();



        setStatus(status => !status)
        // if(status){
        //     onPause();
        // }
        // else onPlay();

        // status = !status; //toggling the boolean (true execute hone k baad false kar do, firse true kardo, firse false kar do) (like a two way switch)
        
        console.log(message);
    }


    return(
        <>
            <button className="button" onClick={handleClick}>{children} : {status? '▶️' : '⏹️'}</button>
        </>
        
    )
}

export default PlayButton;