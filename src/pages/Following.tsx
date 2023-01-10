import React from 'react';

function Following() {
  return (
    <>
      <div id="app" class="flex container h-full w-full">
    <div class="flex container h-full w-full">
      <SideNav />

      <div class="w-full md:w-1/2 h-full overflow-y-scroll">
        <!-- top navigation -->
        <div class="px-5 pt-3 flex items-center">
          <button @click="gotoProfile()" class="rounded-full p-3 px-4 focus:outline-none hover:bg-lightblue">
            <i class="fas fa-arrow-left text-blue"></i>
          </button>
          <div class="lg:block ml-4">
            <h1 class="text-xl font-bold">{{ profile.name }}</h1>
            <p class="text-left text-sm leading-tight text-dark">@{{ profile.screenName }}</p>
          </div>
        </div>

        <div class="flex flex-row justify-evenly mt-2">
          <button @click="goToFollowers()" class="w-1/2 text-dark font-bold border-b-2 px-10 py-4 hover:bg-lightblue">Followers</button>
          <button class="w-1/2 text-dark font-bold border-b-2 border-blue px-10 py-4 hover:bg-lightblue">Following</button>
        </div>

        <Loader :loading="loading" />
        <Users :users="profiles" />
      </div>      

      <div class="hidden md:block w-1/3 z-0 h-full border-l border-lighter px-6 py-2 overflow-y-scroll relative">
        <SearchBar/>
      </div>
    </div>
  </div>
    </>
  );
}

export default Following;
