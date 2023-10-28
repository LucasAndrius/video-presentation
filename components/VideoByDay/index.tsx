import styles from './VideoByDay.module.css'

export const VideoByDay = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    console.log(dayOfWeek)
    
    let videoToShow = '';

    switch(dayOfWeek) {
        case 0:
            videoToShow = 'assets/videos/domingo.mp4';
            break;
        case 1: videoToShow = 'assets/videos/segundafeira.mp4';
            break;
        case 2: videoToShow = 'assets/videos/tercafeira.mp4';
            break;
        case 3: videoToShow = 'assets/videos/quartafeira.mp4';
            break;
        case 4: videoToShow = 'assets/videos/quintafeira.mp4';
            break;
        case 5: videoToShow = 'assets/videos/sextafeira.mp4';
            break;
        case 6: videoToShow = 'assets/videos/sabado.mp4';
            break;
        case 7: videoToShow = 'assets/videos/domingo.mp4'
            break;
        default:
            videoToShow = 'assets/videos/default.mp4'
    }

    return (
        <div>
            <video 
                src={videoToShow} 
                controls
                className={styles.video}
            />
        </div>
    )
}