import React from 'react';
import SideNav from '../components/SideNav';
import SearchBar from '../components/SearchBar';
function Profile() {
  return (
    <div id="app" className="flex container h-screen w-full">
      <div className="flex container h-screen w-full">
        <SideNav />

        <div className="w-1/2 h-full overflow-y-scroll">Profile</div>

        <div className="hidden md:block w-1/3 z-0 h-full border-l border-lighter px-6 py-2 overflow-y-scroll relative">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Profile;
