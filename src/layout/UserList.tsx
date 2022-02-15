import { Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import React, { Fragment, useCallback } from 'react';
import { Country } from '../architecture/enums/Country';
import { Gender } from '../architecture/enums/Gender';
import { Membership } from '../architecture/enums/Membership';
import { useCombineFilter } from '../hooks/useCombineFilter';
import { users } from '../models/instances';
import { Member } from '../models/Member';
import { User } from '../models/User';

const UserList: React.FC = () => {
  const { filteredData, isApplied, toggleFilter, resetFilters } = useCombineFilter<User | Member>(users);

  function filterForMembership(membershipType: Membership) {
    return (users: User[]) => users.filter((user) => user instanceof Member && user.membership === membershipType);
  }

  const filterForGender = useCallback(function (gender: Gender) {
    return (users: User[]) => users.filter((user) => user.gender === gender);
  }, []);

  function filterForAge(minAge: number) {
    return (users: User[]) => users.filter((user) => user.age >= minAge);
  }

  function membersOnly() {
    return (users: User[]) => users.filter((user) => user instanceof Member);
  }

  return (
    <Fragment>
      <Button
        variant={isApplied('Filter For Women') ? 'contained' : 'text'}
        color={isApplied('Filter For Women') ? 'primary' : 'inherit'}
        onClick={() => toggleFilter('Filter For Women', filterForGender(Gender.Female))}
      >
        Apply Woman Filter
      </Button>
      <Button
        variant={isApplied('Filter For Men') ? 'contained' : 'text'}
        color={isApplied('Filter For Men') ? 'primary' : 'inherit'}
        onClick={() => toggleFilter('Filter For Men', filterForGender(Gender.Male))}
      >
        Apply Men Filter
      </Button>
      <Button
        variant={isApplied('Filter Above 30') ? 'contained' : 'text'}
        color={isApplied('Filter Above 30') ? 'primary' : 'inherit'}
        onClick={() => toggleFilter('Filter Above 30', filterForAge(30))}
      >
        Above 30
      </Button>
      <Button
        variant={isApplied('Members Only') ? 'contained' : 'text'}
        color={isApplied('Members Only') ? 'primary' : 'inherit'}
        onClick={() => toggleFilter('Members Only', membersOnly())}
      >
        Members Only
      </Button>
      <Button
        variant={isApplied('Premium Only') ? 'contained' : 'text'}
        color={isApplied('Premium Only') ? 'primary' : 'inherit'}
        onClick={() => toggleFilter('Premium Only', filterForMembership(Membership.Premium))}
      >
        Premium Only
      </Button>
      <Button color='error' onClick={resetFilters}>
        Reset All
      </Button>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {filteredData.map((user) => (
          <Grid item key={user.firstName + user.lastName}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                  {`${user.firstName} ${user.lastName}`}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default UserList;
