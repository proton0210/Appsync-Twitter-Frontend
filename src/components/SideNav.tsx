import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faClipboardList,
  faUser,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const tabs = [
  {
    icon: <FontAwesomeIcon icon={faHome} />,
    title: 'Home',
    id: 'home',
    target: 'Home'
  },
  {
    icon: <FontAwesomeIcon icon={faHashtag} />,
    title: 'Explore',
    id: 'explore'
  },
  {
    icon: <FontAwesomeIcon icon={faBell} />,
    title: 'Notifications',
    id: 'notifications'
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    title: 'Messages',
    id: 'messages'
  },
  {
    icon: <FontAwesomeIcon icon={faBookmark} />,
    title: 'Bookmarks',
    id: 'bookmarks'
  },
  {
    icon: <FontAwesomeIcon icon={faClipboardList} />,
    title: 'Lists',
    id: 'lists'
  },
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'Profile',
    id: 'profile',
    target: 'Profile'
  },
  { icon: <FontAwesomeIcon icon={faEllipsisH} />, title: 'More', id: 'more' }
];
function SideNav() {
  let navigate = useNavigate();

  return (
    <div className="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between min-w-max">
      <div>
        <button className="h-12 w-12 hover:bg-lightblue text-3xl text-blue rounded-full">
          <SocialIcon network="twitter" />
        </button>
        <div>
          {tabs.map((tab) => {
            return (
              <button
                key={tab.id}
                className="focus:outline-none hover:text-blue flex items-center px-4 py-2 hover:bg-lightblue rounded-full mr-auto mb-3"
                onClick={() => {
                  navigate('/' + tab.target);
                }}
              >
                <i className="text-2xl mr-4">{tab.icon}</i>
                <p className="text-lg font-semibold text-left hidden lg:block">
                  {tab.title}
                </p>
              </button>
            );
          })}
        </div>
        <button className="text-white bg-blue rounded-full font-semibold h-12 lg:h-auto w-20 lg:w-full p-3 hover:bg-darkblue">
          <p className="hidden lg:block">Tweet</p>
          <i className="fas fa-plus lg:hidden"></i>
        </button>
      </div>
    </div>
  );
}

export default SideNav;
