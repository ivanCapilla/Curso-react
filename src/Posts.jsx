export const Posts = () => {
  fetch('https://rickandmortyapi.com/api/character/1')
    .then((response) => response.json())
    .then((data) => {console.log(data)})

  return (
    <div>
      <ul>
        <li>Lista 1</li>
        <li>Lista 2</li>
        <li>Lista 3</li>
      </ul>
    </div>
  );
};
