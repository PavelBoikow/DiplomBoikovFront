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

export const AddInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setLoading] = React.useState(false);
  const [text, setText] = React.useState('');
  const [title, setTitle] = React.useState('');
  const inputFileRef = React.useRef(null);

  const isEditing = Boolean(id);

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  const onSabmit = async () => {
    try{
      setLoading(true);
      
      const fields = {
        title,
        text
      };

      const { data } = isEditing ? await axios.patch(`/info/${id}`, fields) : await axios.post('/info', fields);

      const _id = isEditing ? id : data._id;

      navigate(`/`);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при создании статьи!')
    }
  }

  React.useEffect(() => {
    if (id) {
      axios
      .get(`/info/${id}`)
      .then( ({data}) => {
        setText(data.text);
      }).catch(err =>{
        console.warn(err);
        alert('Ошибка при получении статьи!');
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
      <br />
      <br />
      <TextField
        classes={{ root: styles.title}}
        variant="standard"
        placeholder="Заголовок статьи..."
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
