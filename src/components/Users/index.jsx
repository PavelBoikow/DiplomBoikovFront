import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import axios from './../../axios.js';
import styles from './Post.module.scss';
import { StudSkeleton } from './Skeleton';
import Button from '@mui/material/Button';

export const User = ({
  id,
  fullName,
  email,
  children,
  status,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  const dispatch = useDispatch();

  if (isLoading) {
    return <StudSkeleton />;
  }

  const onClickRemove = () => {
    if(window.confirm('Вы действительно хотите удалить статью?')){
      axios.delete(`/auth/${id}`)
    }
  };
  const statadm = {
    status: 2
  }
  const statmod = {
    status: 1
  }
  const onClickAdm = () => {
    axios.patch(`/auth/${id}`, statadm)
      .catch(err =>{
        console.warn(err);
        alert('Ошибка!');
      });
  };
  const onClickMod = () => {
    axios.patch(`/auth/${id}`, statmod)
      .catch(err =>{
        console.warn(err);
        alert('Ошибка!');
      });
  };

  return (
    
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {isEditable && (
        <div className={styles.editButtons}>
          <Link to={`/user/${id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      <div className={styles.wrapper}>
        <div className={styles.indention}>
        <p className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
            ФИО: {fullName}
        </p>
        <p className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
            Email: {email}
        </p>
        <p className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
            Status: {status == 0? 'Не одобрен' : (status == 1? 'Редактор' : (status == 2? 'Администратор' : 'Error'))
            }
        </p>
        <Button onClick={onClickAdm} variant="contained">Сделать администратором</Button>
        <p className={styles.Buttons}></p>
        <Button onClick={onClickMod} variant="contained">Сделать модератором</Button>

          {children && <div className={styles.content}>{children}</div>}
          <ul className={styles.postDetails}>
          </ul>
        </div>
      </div>
    </div>
  );
};
