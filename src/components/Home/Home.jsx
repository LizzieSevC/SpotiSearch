import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import data from '../SpotiCloneDataBase.json';
import './Home.css';


const Home = () => {
 
  return (
    <>
<div className='homeText'>
<p className='pageTitle'>
    Welcome to your <span className='titleChange'>S</span>poti<span className='titleChange'>S</span>earch!
    </p>

    <p className='pageTitle'>
    What do you want to lisent to today?
    Go ahead and search your favorite song!
    </p>
</div>

<div>

<SearchBar placeholder="Search your fav song..." data={data} />

</div>

    </>
  )
}

export default Home