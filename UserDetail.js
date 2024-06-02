import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const users = [
  {
    id: 1,
    name: 'Jayvion Simon',
    jobTitle: 'HR Manager',
    backgroundImage: 'C:/Users/ASUS/OneDrive/Desktop/proj/my-app/src/images/png1.jpg',
    avatar: '/path/to/avatar1.jpg',
    followers: '9.91k',
    following: '1.95k',
    totalPosts: '9.12k',
    description: 'Detailed description about Jayvion Simon...',
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
    description: 'Detailed description about Jane Doe...',
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

const UserDetail = () => {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <Typography>User not found</Typography>;
  }

  return (
    <div style={{ padding: 20 }}>
      <img src={user.backgroundImage} alt={user.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      <img src={user.avatar} alt={user.name} style={{ width: 100, height: 100, borderRadius: '50%', marginTop: -50, border: '3px solid white' }} />
      <Typography variant="h4">{user.name}</Typography>
      <Typography variant="h6">{user.jobTitle}</Typography>
      <Typography variant="body1">{user.description}</Typography>
      <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt dolores deleniti ratione nesciunt facere, incidunt modi? Veritatis recusandae ex eum accusantium debitis, quo quod id dolor enim. Repellendus, fugiat.</Typography>
    </div>
  );
};

export default UserDetail;
