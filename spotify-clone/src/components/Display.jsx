// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route ,Routes  } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';

function Display() {
  return (
    <div className='w-[100%] h-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome/>} ></Route>
        <Route path='/album/:id' element={<DisplayAlbum/>} ></Route>

      </Routes>
    </div>
  );
}

export default Display;