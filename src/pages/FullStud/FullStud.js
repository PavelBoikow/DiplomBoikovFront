import React from "react";
import { useParams } from "react-router-dom";

import { Stud } from "../../components/Stud/index";
import axios from "../../axios";
import ReactMarkdown from "react-markdown";

export const FullStud = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const {id} = useParams();

  React.useEffect(()=>{
    axios.get(`/StudentAssociations/${id}`).then((res) =>{
      setData(res.data);
      setLoading(false);
    })
    .catch((err) =>{
      console.warn(err);
      alert('Ошибка при получении статьи')
    });
  },[]);

  if (isLoading) {
    return <Stud isLoading={isLoading} isFullPost/>;
  }

  return (
    <>
      <Stud
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl ? `http://localhost:4444${data.imageUrl}` : ''}
        isFullPost
      >
        <ReactMarkdown children={data.text}/>
      </Stud>
    </>
  );
};
