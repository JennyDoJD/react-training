import './App.css';

const userInformation = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://floridainvents.org/wp-content/uploads/hedy-lamarr.png',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{userInformation.name}</h1>
      <img
        className='user-avatar'
        src={userInformation.imageUrl}
        alt={'Photo of ' + userInformation.name}
        style={{
          with: userInformation.imageSize,
          height: userInformation.imageSize,
        }}
      ></img>
    </>
  );
}
