import React from 'react';
import SideNav from '../components/SideNav';
import SearchBar from '../components/SearchBar';
import { useSelector } from 'react-redux';
import timeago from '../server-utils/timeago';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faCalendar,
  faEllipsisH,
  faEnvelope,
  faLink,
  faM,
  faMapMarker,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

function Profile() {
  const profile = useSelector((state: any) => state.profile);
  const user = useSelector((state: any) => state.auth.user);
  const isSelf = user.username === profile.id;
  const joinedDate = timeago(profile.createdAt);
  const [followingLabel, setFollowingLabel] = React.useState('Following');

  return (
    <div className="flex container h-screen w-full">
      <div className="flex container h-screen w-full">
        <SideNav />

        <div className="w-1/2 h-full overflow-y-scroll">
          <div className="px-5 py-3 border-b border-lighter flex items-center">
            <button
              className="rounded-full p-3 px-4 focus:outline-none hover:bg-lightblue"
              onClick={() => window.history.back()}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="fas fa-arrow-left text-blue"
              />
            </button>
            <div className="lg:block ml-4">
              <h1 className="text-xl font-bold">{profile.name}</h1>
              <p className="text-left text-sm leading-tight text-dark">
                {profile.tweetsCount} Tweets
              </p>
            </div>
          </div>

          {/* <!-- background image --> */}
          <div
            className="border-b-1 border-lighter flex"
            style={{ height: '200px', display: 'block' }}
          >
            {profile.backgroundImageUrl && (
              <div className="h-full max-h-full">
                <img
                  src={profile.backgroundImageUrl}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            {!profile.backgroundImageUrl && (
              <div className="bg-gray-400 h-full max-h-full"></div>
            )}
          </div>

          {/* <!-- profile details --> */}
          <div className="p-3 flex flex-col">
            <div className="flex flex-row justify-between">
              <img
                src={profile.imageUrl}
                className="w-32 h-32 rounded-full border-white border-4"
                style={{ marginTop: '-80px' }}
              />

              {isSelf && (
                <div>
                  {profile.imageUrl === null ||
                    (profile.imageUrl === 'default_profile.png' && (
                      <button className="ml-auto text-blue font-bold px-4 py-2 rounded-full border border-blue mb-2 hover:bg-lightblue">
                        Set up profile
                      </button>
                    ))}
                  {profile.imageUrl !== null &&
                    profile.imageUrl !== 'default_profile.png' && (
                      <button className="ml-auto text-blue font-bold px-4 py-2 rounded-full border border-blue mb-2 hover:bg-lightblue">
                        Edit profile
                      </button>
                    )}
                </div>
              )}

              {!isSelf && (
                <div>
                  <button className="ml-auto mr-3 text-blue font-bold px-3 py-2 rounded-full border border-blue mb-2 hover:bg-lightblue">
                    <FontAwesomeIcon
                      icon={faEllipsisH}
                      className="fas fa-ellipsis-h"
                    ></FontAwesomeIcon>
                  </button>
                  <button className="ml-auto mr-3 text-blue font-bold px-3 py-2 rounded-full border border-blue mb-2 hover:bg-lightblue">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="fas fa-envelope"
                    ></FontAwesomeIcon>
                  </button>
                  {!profile.isFollowing && (
                    <button className="ml-auto text-blue font-bold px-4 py-2 rounded-full border border-blue mb-2 hover:bg-lightblue">
                      Follow
                    </button>
                  )}
                  {profile.following && (
                    <button
                      onMouseOver={() => setFollowingLabel('Unfollow')}
                      onMouseLeave={() => setFollowingLabel('Following')}
                      className="ml-auto text-white bg-blue font-bold px-4 py-2 rounded-full border mb-2 hover:bg-red-700"
                    >
                      {followingLabel}
                    </button>
                  )}
                </div>
              )}
            </div>
            <div>
              <p className="font-bold text-xl">{profile.name}</p>
              <p className="text-dark">@{profile.screenName}</p>
              <p className="my-2">{profile.bio}</p>
              <div className="flex flex-row mt-1 mb-2">
                {profile.location && (
                  <div className="flex flex-row mr-4">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="fas fa-map-marker-alt text-dark align-text-bottom pt-1 mr-2"
                    ></FontAwesomeIcon>
                    <p className="text-dark">{profile.location}</p>
                  </div>
                )}
                {profile.website && (
                  <div className="flex flex-row mr-4">
                    <FontAwesomeIcon
                      icon={faLink}
                      className="fas fa-link text-dark align-text-bottom pt-1 mr-2"
                    ></FontAwesomeIcon>
                    <a
                      href={profile.website}
                      target="_blank"
                      className="text-dark"
                    >
                      {profile.website
                        .replace('https://', '')
                        .replace('http://', '')}
                    </a>
                  </div>
                )}
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="far fa-calendar-alt text-dark align-text-bottom pt-1 mr-2"
                ></FontAwesomeIcon>
                <p className="text-dark">Joined {joinedDate}</p>
              </div>
              <div className="flex flex-row mt-1">
                <button className="mr-4 flex flex-row hover:underline">
                  <span className="font-bold">{profile.followingCount}</span>
                  <span className="text-dark whitespace-pre"> Following</span>
                </button>
                <button className="flex flex-row hover:underline">
                  <span className="font-bold">{profile.followersCount}</span>
                  <span className="text-dark whitespace-pre"> Followers</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-1/3 z-0 h-full border-l border-lighter px-6 py-2 overflow-y-scroll relative">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Profile;
