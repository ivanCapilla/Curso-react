export function Eventos() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <button
        onClick={() => {
          alert("hola");
        }}
      >
        evento
      </button>
      <input onChange={handleChange} type="text" />
    </div>
  );
}
