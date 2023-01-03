import React from 'react';
import { useProfileAndTimeline } from '../server-utils/fetchProfileAndTimeLine';

function Home() {
  const homePageData = useProfileAndTimeline();
  if (homePageData.isLoading) {
    return <div>Loading...</div>;
  }
  if (homePageData.isError) {
    return <div>Error</div>;
  }
  if (homePageData.data) {
    const [profile, timeline] = homePageData.data as any;
    console.log(profile);
    console.log(timeline);
  }
  return <div>Home</div>;
}

export default Home;
