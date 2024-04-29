import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { define } from "../../state/posts/postsSlice";
import "./index.css";
import Filter from "./components/filter";
import Create from "./components/create";

function Post() {
  const isLoading = useSelector((state) => state.posts.isLoading);
  const posts = useSelector((state) => state.posts.value);
  const filteredPosts = useSelector((state) => state.posts.filteredValue);
  const dispatch = useDispatch();

  useEffect(() => {
    //TODO: get method
    dispatch(define([{ id: 0, name: "nombre1", description: "descripción1" }]));
  }, []);

  const deletePost = (postId) => {
    //TODO: delete method
    dispatch(define(posts.filter((post) => post.id === postId)));
  };

  return (
    <div>
      Posts
      <Filter />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.name}</td>
              <td>{post.description}</td>
              <td>
                <button
                  onClick={() => deletePost(post.id)}
                  disabled={isLoading}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Create />
    </div>
  );
}

export default Post;
