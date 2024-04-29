import { useDispatch, useSelector } from "react-redux";
import { define } from "../../../state/posts/postsSlice";

function Create() {
  const isLoading = useSelector((state) => state.posts.isLoading);
  const dispatch = useDispatch();

  const createPost = (event) => {
    event.preventDefault();
    //It can be a prettier validation method, it can show which field is the field itself, but I use alert to simplicity
    if (!event.target.name.value || !event.target.description.value) {
      alert("Campo nombre y descripción requiridos");
    } else {
      // TODO: post method
      dispatch(
        define([{ id: 0, name: "nombre1", description: "descripción1" }])
      );
    }
  };

  return (
    <form onSubmit={createPost}>
      <input name="name" placeholder="Nombre" />
      <input name="description" placeholder="Descripción" />
      <button type="submit" disabled={isLoading}>
        Crear
      </button>
    </form>
  );
}

export default Create;
