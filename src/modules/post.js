export const nameInput = document.querySelector('.name-field');
export const scoreInput = document.querySelector('.score-field');

export const postData = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2FREnEjGlsDamsW4t7fT/scores/',
    {
      method: 'POST',
      body: JSON.stringify({ user: nameInput.value, score: scoreInput.value }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};
