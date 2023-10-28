import styles from './VideoByDay.module.css'

export const VideoByDay = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    console.log(dayOfWeek)
    
    let videoToShow = '';

    switch(dayOfWeek) {
        
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