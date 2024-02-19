import { useState, useEffect } from "react";
import appwriteService from "../../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../container/Container";
import PostForm from "../post-form/PostForm";

const EditPost = () => {
  const [post, setpost] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setpost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post}></PostForm>
      </Container>
    </div>
  ) : null;
};

export default EditPost;
