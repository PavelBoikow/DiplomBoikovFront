import React from "react";
import { useParams, Link } from "react-router-dom";
import { Post } from "../../components/Post";
import axios from "../../axios";
import ReactMarkdown from "react-markdown";
import "./style.css"
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { fetchStud } from "../../redux/slices/stud";

export const Sellows = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const [text, setText] = React.useState();
  const [id, setId] = React.useState();
  const isAuth = useSelector(selectIsAuth);
  React.useEffect(()=>{
    dispatch(fetchStud());
    axios.get(`/info`).then((res) =>{
      setData(res.data);
      setLoading(false);
    })
    .catch((err) =>{
      console.warn(err);
      alert('Ошибка при получении статьи')
    });
    if (isLoading == false){
        data.map((obj,index) => (
            obj.title == "Sellows"? (setText(obj.text),setId(obj._id)): console.log()   
          )) 
    }
  },[isLoading]);

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost/>;
  }

  return (
    <>
    <div className='Studbox Infotext'>
        <h1 className=''>Стипендиаты</h1>
        {isAuth ? <Link to={`/info/${id}/edit`} className='infoButton'>
          <div>
            <h2>Редактировать</h2>
          </div>
        </Link> : <></>}
    </div>  
     <ReactMarkdown children ={text}/>
     </>
  );
};
