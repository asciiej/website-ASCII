import styles from "./index.module.css";
import { useRef, useState } from "react";

export default function CardPlay({ type, src, title, text, appearance, audio, time }) {
    const audioRef = useRef(new Audio(audio));
    const [playingAudio, setPlayingAudio] = useState(false);
    const [styleAudioBtn, setStyleAudioBtn] = useState(styles.play);

    const handleAudioPlayPause = () => {
        if (playingAudio) {
            audioRef.current.pause();
            setStyleAudioBtn(styles.play);
        } else {
            audioRef.current.play();
            setStyleAudioBtn(styles.pause);
        }
        setPlayingAudio(!playingAudio);
    };

    return (
        <div className={styles.mediaItemAsciiPlay + " " + (appearance ? styles.transparent : "")}>
            <img className={type ? styles.none : styles.imgAsciiPlay} src={src} />
            <div className={type ? styles.videoAsciiPlay : styles.none} style={{ backgroundColor: "black" }}>
            </div>
            <div className={styles.titleItemAsciiPlay}>
                <p className={type ? styles.videoTitle : styles.podcastTitle}>{type ? "Vídeo" : "Podcast"}</p>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className={type ? styles.playVideoBtnAsciiPlay : styles.playImgBtnAsciiPlay} onClick={handleAudioPlayPause}>
                    <a href={src} className={type ? styles.linkAsciiPlay : styles.none}></a>
                    <div className={styles.audioBtnStyle + " " + styleAudioBtn}></div>
                    <p>{time + " Min"}</p>
                </div>
            </div>
        </div>
    );
}