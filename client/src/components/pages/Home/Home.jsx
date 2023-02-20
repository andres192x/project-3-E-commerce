import './Home.css';
import onCodeVid from '../../../Assets/onCodeVid.mp4';
import { useRef } from 'react';

export default function Home() {
    const videoRef= useRef();
    const setPlayBack = () => {
        videoRef.current.playbackRate = 1;
    };

    return (
        <div>
            {/* slogan? */}
            <div>
                <h1 className='home-header'>hello coders</h1>
            </div>

            <div className='video-card'>
                <video ref={videoRef}
        onCanPlay={() => setPlayBack()} className='video-tag' playbackRate='' autoPlay loop muted>
                    <source src={onCodeVid} type='video/mp4' />
                </video>
            </div>
        </div> 
    )
}