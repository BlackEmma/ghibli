import { useEffect, useState } from 'react';
import Accordion from './Accordion.jsx';

function FilmList() {
  const [films, setFilms] = useState([
    { title: 'Castle in the Sky' },
    { title: 'My Neighbor Tororo' },
    { title: 'Grave of the Fireflies' },
  ]);

  const fetchFilms = async () => {
    try {
      const response = await fetch('https://ghibliapi.herokuapp.com/films');
      const data = await response.json();
      setFilms(data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
    }
  };

  useEffect(
    () => fetchFilms(),
    [],
  );

  return (
    <>
      <h2>Choose a Studio Ghibli film and find out more about it</h2>
      <div className="accordion">
        {films.map((film) => (
          // eslint-disable-next-line max-len
          <Accordion title={film.title} description={film.description} originalTitle={film.original_title} director={film.director} producer={film.producer} releaseDate={film.release_date} runningTime={film.running_time}/>
        ))}
      </div>
    </>
  );
}

export default FilmList;
