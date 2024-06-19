import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import axios from "../../axios.js";
import "./style.css"
import { User } from '../../components/Users';
import { selectIsAuth } from '../../redux/slices/auth';

export const Users = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const isAuth = useSelector(selectIsAuth);
  React.useEffect(()=>{
    axios.get(`/auth/all`).then((res) =>{
      setData(res.data);
      setLoading(false);
      console.log(data)
    })
    .catch((err) =>{
      console.warn(err);
      alert('Ошибка при получении статьи')
    });
    
  },[isLoading, data]);

  if (isLoading) {
    return <User isLoading={isLoading} isFullPost/>;
  }
  return (
    <> 
      <div className='Studbox'>
          {data.map((obj, index) =>(
            <div className='Studitem'>
              <User
                id={obj._id}
                fullName={obj.fullName}
                email={obj.email}
                status={obj.status}
                isEditable={isAuth}
              />
            </div>
          ),
          )}
      </div>
    </>
  );
};
