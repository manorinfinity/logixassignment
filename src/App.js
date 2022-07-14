import './App.css';
import React, {useState} from 'react';
import PostList from './pages/PostList';
import SinglePost from './pages/SinglePost';
import { Button } from '@mui/material';
function App() {
  const [currItem, setCurrItem] = useState({});
  const currItemHandler = (post) => {
    setCurrItem(post);
  }
  const backHandler = () => {
    setCurrItem({});
  }
  return (
    <>
      {Object.keys(currItem).length > 0 ? 
      <>
        <SinglePost post={currItem}/>
        <Button onClick={backHandler}>Back</Button>
      </>
      :
      <PostList currItemHandler={currItemHandler}/>
      }
    </>
  );
}

export default App;
