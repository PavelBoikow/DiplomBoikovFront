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
  status = 'new',
  tag = '',
  stat = 0
}
) => {
  const dispatch = useDispatch();
  const { post, tags } = useSelector(state => state.posts);
  const userData = useSelector((state) => state.auth.data);

  const isPostsLoading = post.status === 'loading';
  const isTagsLoading = tags.status === 'loading';

  const tagInUrl = decodeURI(window.location.pathname.includes("tag") ? window.location.pathname.split("/").filter(Boolean).pop() : "");

  React.useEffect(() => {
      status.includes('popularity')?  dispatch(fetchPostsPop()) :dispatch(fetchPosts());
      dispatch(fetchTags());
  }, [status , stat]);
  
  console.log(tagInUrl)
  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={stat} aria-label="">
        <Link to = {"/events"}>
          <Tab label="Новые" />
        </Link>
        <Link to = {"/events/popularity"}>
          <Tab label="Популярные" />
        </Link>
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isPostsLoading ? [...Array(5)] : tagInUrl ? post.items.filter((el) => el.tags.includes(tagInUrl)) : post.items).map((obj, index) => isPostsLoading ? (
            <Post key = {index} isLoading={true}/>
          ) : (
            <Post
              id={obj._id}
              title={obj.title}
              imageUrl={obj.imageUrl ? `${process.env.REACT_APP_API_URL}${obj.imageUrl}`: ''}
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
