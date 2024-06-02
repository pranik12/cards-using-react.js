import React from 'react';
import UserCard from './UserCard.js';

const users = [
  {
    id: 1,
    name: 'Jayvion Simon',
    jobTitle: 'HR Manager',
    backgroundImage: './images/png1.jpg',
    avatar: '/path/to/avatar1.jpg',
    followers: '9.91k',
    following: '1.95k',
    totalPosts: '9.12k',
    socialMedia: [
      { name: 'Facebook', icon: '/path/to/facebook-icon.png', link: '#' },
      { name: 'Instagram', icon: '/path/to/instagram-icon.png', link: '#' },
      { name: 'LinkedIn', icon: '/path/to/linkedin-icon.png', link: '#' },
      { name: 'Twitter', icon: '/path/to/twitter-icon.png', link: '#' },
    ],
  },
  {
    id: 2,
    name: 'Jane Doe',
    jobTitle: 'Software Engineer',
    backgroundImage: '/path/to/image2.jpg',
    avatar: '/path/to/avatar2.jpg',
    followers: '8.5k',
    following: '1.2k',
    totalPosts: '7.8k',
    socialMedia: [
      { name: 'Facebook', icon: '/path/to/facebook-icon.png', link: '#' },
      { name: 'Instagram', icon: '/path/to/instagram-icon.png', link: '#' },
      { name: 'LinkedIn', icon: '/path/to/linkedin-icon.png', link: '#' },
      { name: 'Twitter', icon: '/path/to/twitter-icon.png', link: '#' },
    ],
  },
  // Add more user objects here...
  {
    id: 3,
    name: 'June hamilton',
    jobTitle: 'Software Engineer',
    backgroundImage: '/path/to/image2.jpg',
    avatar: '/path/to/avatar2.jpg',
    followers: '8.5k',
    following: '1.2k',
    totalPosts: '7.8k',
    socialMedia: [
      { name: 'Facebook', icon: '/path/to/facebook-icon.png', link: '#' },
      { name: 'Instagram', icon: '/path/to/instagram-icon.png', link: '#' },
      { name: 'LinkedIn', icon: '/path/to/linkedin-icon.png', link: '#' },
      { name: 'Twitter', icon: '/path/to/twitter-icon.png', link: '#' },
    ],
  },
  {
    id: 4,
    name: 'ottis',
    jobTitle: 'Software Engineer',
    backgroundImage: '/path/to/image2.jpg',
    avatar: '/path/to/avatar2.jpg',
    followers: '8.5k',
    following: '1.2k',
    totalPosts: '7.8k',
    socialMedia: [
      { name: 'Facebook', icon: '/path/to/facebook-icon.png', link: '#' },
      { name: 'Instagram', icon: '/path/to/instagram-icon.png', link: '#' },
      { name: 'LinkedIn', icon: '/path/to/linkedin-icon.png', link: '#' },
      { name: 'Twitter', icon: '/path/to/twitter-icon.png', link: '#' },
    ],
  },
  {
    id: 5,
    name: 'ottis',
    jobTitle: 'Software Engineer',
    backgroundImage: '/path/to/image2.jpg',
    avatar: '/path/to/avatar2.jpg',
    followers: '8.5k',
    following: '1.2k',
    totalPosts: '7.8k',
    socialMedia: [
      { name: 'Facebook', icon: '/path/to/facebook-icon.png', link: '#' },
      { name: 'Instagram', icon: '/path/to/instagram-icon.png', link: '#' },
      { name: 'LinkedIn', icon: '/path/to/linkedin-icon.png', link: '#' },
      { name: 'Twitter', icon: '/path/to/twitter-icon.png', link: '#' },
    ],
  },
  {
    id: 6,
    name: 'ottis',
    jobTitle: 'Software Engineer',
    backgroundImage: '/path/to/image2.jpg',
    avatar: '/path/to/avatar2.jpg',
    followers: '8.5k',
    following: '1.2k',
    totalPosts: '7.8k',
    socialMedia: [
      { name: 'Facebook', icon: '/path/to/facebook-icon.png', link: '#' },
      { name: 'Instagram', icon: '/path/to/instagram-icon.png', link: '#' },
      { name: 'LinkedIn', icon: '/path/to/linkedin-icon.png', link: '#' },
      { name: 'Twitter', icon: '/path/to/twitter-icon.png', link: '#' },
    ],
  },
  {
    id: 7,
    name: 'ottis',
    jobTitle: 'Software Engineer',
    backgroundImage: '/path/to/image2.jpg',
    avatar: '/path/to/avatar2.jpg',
    followers: '8.5k',
    following: '1.2k',
    totalPosts: '7.8k',
    socialMedia: [
      { name: 'Facebook', icon: '/path/to/facebook-icon.png', link: '#' },
      { name: 'Instagram', icon: '/path/to/instagram-icon.png', link: '#' },
      { name: 'LinkedIn', icon: '/path/to/linkedin-icon.png', link: '#' },
      { name: 'Twitter', icon: '/path/to/twitter-icon.png', link: '#' },
    ],
  },
  {
    id: 8,
    name: 'ottis',
    jobTitle: 'Software Engineer',
    backgroundImage: '/path/to/image2.jpg',
    avatar: '/path/to/avatar2.jpg',
    followers: '8.5k',
    following: '1.2k',
    totalPosts: '7.8k',
    socialMedia: [
      { name: 'Facebook', icon: '/path/to/facebook-icon.png', link: '#' },
      { name: 'Instagram', icon: '/path/to/instagram-icon.png', link: '#' },
      { name: 'LinkedIn', icon: '/path/to/linkedin-icon.png', link: '#' },
      { name: 'Twitter', icon: '/path/to/twitter-icon.png', link: '#' },
    ],
  },
];

const UserList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
