function renderPostDate({ published_at }) {
  const publishDate = new Date(published_at);
  const todayDate = new Date();

  const publishTime = publishDate.getTime();
  const todayTime = todayDate.getTime();

  const todayAndPublishSecondsDiff = Math.round((todayTime - publishTime) / 1000);

  let postDateToRender = '';

  if (todayAndPublishSecondsDiff < 3600) {

    postDateToRender = Math.floor(todayAndPublishSecondsDiff / 60);
    postDateToRender = `Há ${postDateToRender + (postDateToRender > 1 ? ' minutos' : ' minuto')}`;

  } else if (todayAndPublishSecondsDiff < 86400) {

    postDateToRender = Math.floor(todayAndPublishSecondsDiff / 3600);
    postDateToRender = `Há ${postDateToRender + (postDateToRender > 1 ? ' horas' : ' hora')}`;

  } else if (todayAndPublishSecondsDiff < 604800) {

    postDateToRender = Math.floor(todayAndPublishSecondsDiff / 86400);
    postDateToRender = `Há ${postDateToRender + (postDateToRender > 1 ? ' dias' : ' dia')}`;

  } else if (todayAndPublishSecondsDiff < 2678400) {

    postDateToRender = Math.floor(todayAndPublishSecondsDiff / 604800);
    postDateToRender = `Há ${postDateToRender + (postDateToRender > 1 ? ' semanas' : ' semana')}`;

  } else if (todayAndPublishSecondsDiff < 3153600) {

    postDateToRender = Math.floor(todayAndPublishSecondsDiff / 2678400);
    postDateToRender = `Há ${postDateToRender + (postDateToRender > 1 ? ' meses' : ' mês')}`;

  } else {

    postDateToRender = Math.floor(todayAndPublishSecondsDiff / 2678400);
    postDateToRender = `Há ${postDateToRender + (postDateToRender > 1 ? ' anos' : ' ano')}`;

  }

  return <time dateTime={published_at}>{postDateToRender}</time>;
}

export default renderPostDate;