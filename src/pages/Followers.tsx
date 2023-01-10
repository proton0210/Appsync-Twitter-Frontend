import React from 'react';
import SideNav from '../components/SideNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getFollowersList } from '../server-utils/FollowOperations';
function Followers() {
  const {screenName}:any = useParams();
  const queryByScreenName = useQuery('fetchFollowers', ()=>getFollowersList(screenName))
  const profile = queryByScreenName.data
  const gotoProfile = () => {
    console.log('gotoProfile');
  };
  return (
    <>
    <div  className="flex container h-full w-full">
    <div className="flex container h-full w-full">
      <SideNav />

      <div className="w-full md:w-1/2 h-full overflow-y-scroll">
        {/* <!-- top navigation --> */}
        <div className="px-5 pt-3 flex items-center">
          <button onClick={gotoProfile} className="rounded-full p-3 px-4 focus:outline-none hover:bg-lightblue">
            <i className="fas fa-arrow-left text-blue"></i>
          </button>
          <div className="lg:block ml-4">
            <h1 className="text-xl font-bold">{ profile.name }</h1>
            <p className="text-left text-sm leading-tight text-dark">@{ profile.screenName }</p>
          </div>
        </div>

        <div className="flex flex-row justify-evenly mt-2">
          <button className="w-1/2 text-dark font-bold border-b-2 border-blue px-10 py-4 hover:bg-lightblue">Followers</button>
          <button @click="goToFollowing()" className="w-1/2 text-dark font-bold border-b-2 px-10 py-4 hover:bg-lightblue">Following</button>
        </div>

        <Loader :loading="loading" />
        <Users :users="profiles" />
      </div>      

      <div className="hidden md:block w-1/3 z-0 h-full border-l border-lighter px-6 py-2 overflow-y-scroll relative">
        <SearchBar/>
      </div>
    </div>
  </div>
  </>
  );
}

export default Followers;
