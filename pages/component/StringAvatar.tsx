import Avatar from '@mui/material/Avatar'
import * as React from 'react';

function stringAvatar(name: string) {
  if(!name) return {}
  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: `${name.split(' ')[0][0]}`,
  };
}


function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}




const StringAvatar = (props: { name: string })=>{
  const { name } = props;
  return (
        <Avatar {...stringAvatar(name)}></Avatar>
  )
}

export default StringAvatar;