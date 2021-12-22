
import './GetPosts.css'
import Post from '../Post/Post';
import ajaxUtils from '../../utils/ajax-utils';
import React, { useState, useEffect } from 'react';

// TODO: Google react state, Promise, async / await

function GetPosts() {
  const [items, setItems] = useState([]);
  useEffect(() => {
      ajaxUtils.getPosts().then(
        (result) => {
          setItems(result);
        },
      )
  }, [])
    return (
      <div className="posts">
        {items.map(item => (
          <Post key={item.id} userId={item.userId} title={item.title} body={item.body} />
        ))}
      </div>
    );
}

export default GetPosts;