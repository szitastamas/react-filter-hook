import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment } from 'react';
import { Gender } from '../architecture/enums/Gender';
import { Membership } from '../architecture/enums/Membership';
import { useCombineFilter } from '../hooks/useCombineFilter';
import { users } from '../models/instances';
import { Member } from '../models/Member';
import { User } from '../models/User';

const filterCollection = [
  {
    name: 'Filter Women',
    callback: function () {
      return (users: User[]) => users.filter((user) => user.gender === Gender.Female);
    },
  },
  {
    name: 'Filter Men',
    callback: function () {
      return (users: User[]) => users.filter((user) => user.gender === Gender.Male);
    },
  },
  {
    name: 'Above 30',
    callback: function () {
      return (users: User[]) => users.filter((user) => user.age >= 30);
    },
  },
  {
    name: 'Members Only',
    callback: function () {
      return (users: User[]) => users.filter((user) => user instanceof Member);
    },
  },
  {
    name: 'Premium Only',
    callback: function () {
      return (users: User[]) =>
        users.filter((user) => user instanceof Member && user.membership === Membership.Premium);
    },
  },
];

const UserList: React.FC = () => {
  const { filteredData, isApplied, toggleFilter, resetFilters } = useCombineFilter<User | Member>(users);

  return (
    <Fragment>
      <Box sx={{ p: 2, my: 2, border: '1px solid darkgrey', borderRadius: '5px' }}>
        {filterCollection.map((item) => (
          <Button
            key={item.name}
            variant={isApplied(item.name) ? 'contained' : 'text'}
            onClick={() => toggleFilter(item.name, item.callback())}
          >
            {item.name}
          </Button>
        ))}
        <Button color='error' onClick={resetFilters}>
          Reset All
        </Button>
      </Box>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {filteredData.map((user) => (
          <Grid item key={user.firstName + user.lastName}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 18 }} color='text.primary' gutterBottom>
                  {`${user.firstName} ${user.lastName}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                  {user.gender}
                </Typography>
                {user instanceof Member ? (
                  <Fragment>
                    <Typography color='text.secondary'>Days since joined: {(user as Member).memberFor}</Typography>
                  </Fragment>
                ) : (
                  <Typography color='text.secondary'>Not a member yet</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default UserList;
