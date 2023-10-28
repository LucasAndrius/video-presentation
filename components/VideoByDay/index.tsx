import styles from './VideoByDay.module.css';

export const VideoByDay = () => {
  const now = new Date();
  const userDayOfWeek = now.toLocaleDateString(undefined, { weekday: 'long' }); // Obtém o dia da semana local do navegador do usuário

  console.log(userDayOfWeek);

  let videoToShow = '';

  switch (userDayOfWeek) {
    case 'domingo':
      videoToShow = 'assets/videos/domingo.mp4';
      break;
    case 'segunda':
      videoToShow = 'assets/videos/segundafeira.mp4';
      break;
    case 'terça':
      videoToShow = 'assets/videos/tercafeira.mp4';
      break;
    case 'quarta':
      videoToShow = 'assets/videos/quartafeira.mp4';
      break;
    case 'quinta':
      videoToShow = 'assets/videos/quintafeira.mp4';
      break;
    case 'sexta':
      videoToShow = 'assets/videos/sextafeira.mp4';
      break;
    case 'sábado':
      videoToShow = 'assets/videos/sabado.mp4';
      break;
    default:
      videoToShow = 'assets/videos/default.mp4';
  }

  return (
    <div>
      <video src={videoToShow} controls className={styles.video} />
    </div>
  );
};
