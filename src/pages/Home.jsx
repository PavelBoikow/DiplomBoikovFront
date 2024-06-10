import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';


import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { fetchPosts, fetchPostsPop, fetchTags } from '../redux/slices/posts';

export const Home = ({
  tag = ''
}
) => {
  const dispatch = useDispatch();
  const { post, tags } = useSelector(state => state.posts);
  const userData = useSelector((state) => state.auth.data);

  const isPostsLoading = post.status === 'loading';
  const isTagsLoading = tags.status === 'loading';


  React.useEffect(() => {
      dispatch(fetchPosts());     
      dispatch(fetchTags());
  }, []);
  
  if (tag != '') {
   post.items = post.items.filter(isBigEnough)
  }
  function isBigEnough(value) {
    var flag = new Boolean(false);
    for (let i=0; i < value.length; i++){
      if (value[0] == window.location.pathname.slice(6)){
        flag = true
      }
    }
    return flag;
  }

  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="">
        <Link to = {"/events"}>
          <Tab label="Новые" />
          
        </Link>
        <Link to = {"/events/popularity"}>
          <Tab label="Популярные" />
        </Link>
      </Tabs>
      <p>{tag}</p>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isPostsLoading ? [...Array(5)]:post.items).map((obj, index) => isPostsLoading ? (
            <Post key = {index} isLoading={true}/>
          ) : (
            <Post
              id={obj._id}
              title={obj.title}
              imageUrl={obj.imageUrl ? `http://localhost:4444${obj.imageUrl}`: ''}
              user={obj.user}
              createdAt={obj.createdAt}
              viewsCount={obj.viewsCount}
              tags={obj.tags}
              isEditable={userData?._id === obj.user._id}
            />
          ),
          )}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={tags.items} isLoading={isTagsLoading} />
        </Grid>
      </Grid>
    </>
  );
};
