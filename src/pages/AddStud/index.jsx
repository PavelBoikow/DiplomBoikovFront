import React from 'react';
import { useNavigate , Navigate, useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';

import 'easymde/dist/easymde.min.css';
import { selectIsAuth } from '../../redux/slices/auth';
import axios from '../../axios';
import styles from './AddPost.module.scss';

export const AddStud = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setLoading] = React.useState(false);
  const [text, setText] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const inputFileRef = React.useRef(null);

  const isEditing = Boolean(id);

  const handleChangeFile = async (event) => {
    try{
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const { data } = await axios.post('/upload', formData);
      setImageUrl(data.url);
    }catch (err) {
      console.warn(err);
      alert('Ошибка при загрузке файла!')
    }
  };

  const  onClickRemoveImage= () => {
    setImageUrl('');
  };

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  const onSabmit = async () => {
    try{
      setLoading(true);
      
      const fields = {
        title,
        imageUrl,
        text
      };

      const { data } = isEditing ? await axios.patch(`/StudentAssociations/${id}`, fields) : await axios.post('/StudentAssociations', fields);

      const _id = isEditing ? id : data._id;

      navigate(`/Student_associations/${_id}`);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при создании студенческого объединения!')
    }
  }

  React.useEffect(() => {
    if (id) {
      axios
      .get(`/StudentAssociations/${id}`)
      .then( ({data}) => {
        setTitle(data.title);
        setText(data.text);
        setImageUrl(data.imageUrl);
      }).catch(err =>{
        console.warn(err);
        alert('Ошибка при получении студенческого объединения!');
      });
    }
  }, [])

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/"/>
  }


  return (
    <Paper style={{ padding: 30 }}>
      <Button onClick={() => inputFileRef.current.click()} variant="outlined" size="large">
        Загрузить превью
      </Button>
      <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <>
          <Button variant="contained" color="error" onClick={onClickRemoveImage}>
            Удалить
          </Button>
          <img className={styles.image} src={`${process.env.REACT_APP_IMG}${imageUrl}`} alt="Uploaded" />
          
        </>
      )}
      <br />
      <br />
      <TextField
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Название студенческого объединения..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <SimpleMDE className={styles.editor} value={text} onChange={onChange} options={options} />
      <div className={styles.buttons}>
        <Button onClick={onSabmit} size="large" variant="contained">
          {isEditing ? 'Сохранить' : 'Опубликовать'}
        </Button>
        <a href="/">
          <Button size="large">Отмена</Button>
        </a>
      </div>
    </Paper>
  );
};
