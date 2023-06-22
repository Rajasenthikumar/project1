import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import one from '../../../Assest/Image/one.png';
import two from '../../../Assest/Image/two.png';
import three from '../../../Assest/Image/three.png';
import four from '../../../Assest/Image/four.png';



export default function RecipeReviewCard() {
  return (
    <Card sx={{ pb: 5, borderRadius: 5 }}>
      <CardHeader title="Recent Client " />
      <CardHeader avatar={<Avatar alt="Remy Sharp" src={one} />}
        title="Benny Chagur"
        subheader="Member"
      />
      <CardHeader avatar={<Avatar alt="Remy Sharp" src={two} />}
        title="Chynita Heree"
        subheader="Member"
      />
      <CardHeader avatar={<Avatar alt="Remy Sharp" src={three} /> }
        title="David Yers"
        subheader="Member"
      />
      <CardHeader avatar={ <Avatar alt="Remy Sharp" src={four} /> }
        title="Hayder Jahid"
        subheader="Member"
      />
    </Card>
  );
}
