import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo({posts, handleSearch, searchText}) {
  return (
    <Stack spacing={3} sx={{ width: "100%" }}>
      <Autocomplete
        id="search"
        options={posts.map((option) => option.title)}
        value={searchText}
        onChange={(event, newValue) => handleSearch(newValue)}
        renderInput={(params) => <TextField {...params} onChange={(e) => handleSearch(e.target.value)} label="Search" />}
      />
    </Stack>
  );
}