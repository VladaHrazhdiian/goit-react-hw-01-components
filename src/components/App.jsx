import Profile from "./Profile/Profile";

import user from '../data/user.json';

export function App() {
  document.title = 'Homework 1';
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
          </>
  );
}