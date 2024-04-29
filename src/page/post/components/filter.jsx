import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../../state/posts/postsSlice";

function Filter() {
  const isLoading = useSelector((state) => state.posts.isLoading);
  const posts = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();

  const filterPost = (event) => {
    event.preventDefault();
    dispatch(
      filter(
        posts.filter((post) => post.name.includes(event.target.name.value))
      )
    );
  };

  return (
    <form onSubmit={filterPost}>
      <input name="name" placeholder="Filtro de Nombre" />
      <button disabled={isLoading}>Buscar</button>
    </form>
  );
}

export default Filter;
