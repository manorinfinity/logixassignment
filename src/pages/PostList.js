import { Typography, TextField, Container, Pagination } from '@mui/material'
import { useEffect, useState } from 'react';
import Post from '../components/Post';
import Search from '../components/Search';
function PostList({currItemHandler}) {
  const [posts, setPosts] = useState([]);
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedPosts, setSearchedPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data => {
        setPosts(data)
        setResults(data.slice(1,10))
    })
  }, [1])
  const totalPage = searchedPosts.length > 0 ? Math.ceil(searchedPosts.length/10) : Math.ceil(posts.length / 10);
  const PaginationHandler = (pageNo) => {
    setResults(searchedPosts.length>0 ? searchedPosts.slice((pageNo-1)*10, (pageNo*10)) : posts.slice((pageNo-1)*10, (pageNo*10)));
  }
  const handleSearch = (newValue) => {
    const result = posts.filter(item => item.title.includes(newValue))
    setSearchedPosts(result)
    setResults(result.slice(0,10))
    setSearchText(newValue);
  }
  return (
    <div className="App">
     <Container>
        <Typography variant="h1">Posts List</Typography>
        {/* <TextField value={searchText} sx={{minWidth: 350}} onChange={handleSearch} id="search" label="Search" variant="outlined" /> */}
        <Search posts={results} handleSearch={handleSearch} />
        <Container fluid sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {results && results.map((post) => (
            <Post key={post.id} post={post} onClick={() => currItemHandler(post)}/>
        ))}
        </Container>
        <Pagination sx={{width: "100%"}} onClick={(e) => PaginationHandler(e.target.innerText)} count={totalPage} color="primary" />
     </Container>
    </div>
  );
}

export default PostList;
