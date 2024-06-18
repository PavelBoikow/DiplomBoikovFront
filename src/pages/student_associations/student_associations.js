import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';

import "./style.css"
import { Stud } from '../../components/Stud';
import { fetchStud } from '../../redux/slices/stud';
import { selectIsAuth } from '../../redux/slices/auth';

export const Student_associations = () => {
  const dispatch = useDispatch();

  const stud  = useSelector(state => state.stud);
  const isAuth = useSelector(selectIsAuth);
  const isPostsLoading = stud.status === 'loading';

  React.useEffect(() => {
      dispatch(fetchStud());
  }, []);


  return (
    <>
      <div className='Studbox text'>
        <h1 className=''>Студенческие объединения</h1>
        {isAuth ? <Link to = "/add-stud" className='StudButton'>
          <div>
            <h2>Создать</h2>
          </div>
        </Link> : <></>}
      </div>     
            
      <div className='Studbox'>
          {(isPostsLoading ? [...Array(5)]:stud.items).map((obj, index) => isPostsLoading ? (
              <Stud key = {index} isLoading={true}/>
          ) : (
            <div className='Studitem'>
              <Stud
                id={obj._id}
                title={obj.title}
                imageUrl={obj.imageUrl ? `${process.env.REACT_APP_IMG}${obj.imageUrl}`: ''}
                isEditable={isAuth}
              />
            </div>
          ),
          )}
      </div>
    </>
  );
};
