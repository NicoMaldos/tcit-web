import "./index.css";

function Post() {
  const isPending = false;
  const posts = [{ id: 0, name: "hola", description: "chao" }];

  const createPost = (event) => {
    event.preventDefault();
    //It can make a prettier validation method, it can show which field is the flied itself, but I use alert for simplicity
    if (!event.target.name.value || !event.target.description.value) {
      alert("Campo nombre y descripción requiridos");
    } else {
      // add post method
    }
  };

  //The filter can be a component, but is a pretty small view, so I leave it heare, same with the create form
  const filterPost = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      Posts
      <form onSubmit={filterPost}>
        <input
          name="name"
          placeholder="Filtro de Nombre"
          disabled={isPending}
        />
        <button>Buscar</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.name}</td>
              <td>{post.description}</td>
              <td>
                <button>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={createPost}>
        <input
          name="name"
          placeholder="Nombre"
          disabled={isPending}
          validation={{
            required: {
              value: true,
              message: "required",
            },
          }}
        />
        <input
          name="description"
          placeholder="Descripción"
          disabled={isPending}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default Post;
