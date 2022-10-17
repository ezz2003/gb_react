import { color } from '@mui/system';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redusers/dataReduser';


const PageData = () => {

  const posts = useSelector(state => state.pageData.posts);
  const loading = useSelector(state => state.pageData.loading);
  const error = useSelector(state => state.pageData.error);

  const a = ['1', '2', '3'];
  console.log(loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  }, []);
  
  const getColor = (id) => { return (id % 2) ? "blue" : "green" };
  
  if (loading) {
     return (<div>is loading</div>)
  }
  
  
return(
  <div className='chat-list'>
   
    {posts.map((post) => {
      return (
        <div key={post.id} style={{ color: getColor(post.id) }}>
          {post.title}</div>)})}
  </div>
)
}

export default PageData



