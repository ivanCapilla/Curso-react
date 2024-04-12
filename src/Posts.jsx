export const Posts = () => {

  return (
    <div>
        <button onClick={() => {
            fetch('https://rickandmortyapi.com/api/character/1')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
        }}>Hacer post</button>
    </div>
  );
};
