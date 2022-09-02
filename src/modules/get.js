const renderScore = async () => {
  const scoreBoard = document.getElementById('score');
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2FREnEjGlsDamsW4t7fT/scores/',
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data) {
        return;
      }
      const scoreList = data.result;
      scoreList.forEach((element) => {
        const list = document.createElement('li');
        list.innerHTML = `<p>${element.user} : ${element.score}</p>`;
        scoreBoard.appendChild(list);
      });
    });
};

export default renderScore;