import React from "react";
import { useParams } from "react-router-dom";

import { Post } from "../components/Post";
import axios from "../axios";
import ReactMarkdown from "react-markdown";

export const FullPost = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const {id} = useParams();

  React.useEffect(()=>{
    axios.get(`/posts/${id}`).then((res) =>{
      setData(res.data);
      setLoading(false);
    })
    .catch((err) =>{
      console.warn(err);
      alert('Ошибка при получении статьи')
    });
  },[]);

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost/>;
  }
  const createdAtMass = data.createdAt.substr(0, 10).split('-');
  const createdAtNu = createdAtMass[2] +  '-' + createdAtMass[1] + '-' + createdAtMass[0];
  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl ? `https://diplom-boikov-greenfoxlivetv.amvera.io${data.imageUrl}` : ''}
        user={data.user}
        createdAt={createdAtNu}
        viewsCount={data.viewsCount}
        tags={data.tags}
        isFullPost
      >
        <ReactMarkdown children={data.text}/>
      </Post>
    </>
  );
};
