import { FC, useEffect, useRef } from "react"

import { VideoProps } from '../types'

type Props = {
    media: VideoProps
}

const Video: FC<Props> = ({ media }) => {
    const ref = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const videoRef = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                ref.current?.play()
            }else ref.current?.pause()
        }, { threshold: 0.75 });
        observer.observe(videoRef);

        return () => observer.unobserve(videoRef);
    }, [ref])

    return(
        <video ref={ref} muted loop playsInline >
            <source type={'video/' + media.format} src={media.src} />
        </video>
    )
}

export default Video;