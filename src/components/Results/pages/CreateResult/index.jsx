import { Button, FormControl, FormHelperText, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import CreateResultItem from '../components/CreateResultItem';
const indexItem = (target) => {
  return parseInt(target.split('-')[target.split('-').length - 1]);
};
const CreateResult = () => {
  const [homeScores, setHomeScores] = useState({});
  const [awayScores, setAwayScores] = useState({});
  const [dataHomeForm, setDataHomeForm] = useState({});
  const [dataAwayForm, setDataAwayForm] = useState({});
  const [dataForm, setDataForm] = useState({});
  const handleCreateResult = (e) => {
    e.preventDefault();
    const dataClub = (club) => {
      const clubKeys = Object.keys(club);
      const result = clubKeys
        .reduce((acc, cur, index) => {
          let obj = {};
          if (cur.includes('player')) {
            obj = { player: club[cur] };
            obj.goalAt = club[clubKeys.find((data) => data.includes('goalAt') && indexItem(data) === indexItem(cur))];
            obj.penalty =
              club[clubKeys.find((data) => data.includes('penalty') && indexItem(data) === indexItem(cur))] || false;
            obj.ownGoal =
              club[clubKeys.find((data) => data.includes('ownGoal') && indexItem(data) === indexItem(cur))] || false;
            // dataScoresKeys.forEach(dataScoresKey => {
          }
          acc.push(obj);
          return acc;
        }, [])
        .filter((item) => Object.keys(item).length > 0);
      return result;
    };
    const homeData = dataClub(homeScores);
    const awayData = dataClub(awayScores);
    console.log('homeData', homeData);
    console.log('awayData', awayData);
    console.log('homeDataForm', dataHomeForm);
    console.log('awayDataForm', dataAwayForm);
    console.log('Data form', dataForm);
  };
  const handleHomeSubmit = (scores, dataForm) => {
    setHomeScores(scores);
    setDataHomeForm(dataForm);
  };
  const handleAwaySubmit = (scores, dataForm) => {
    setAwayScores(scores);
    setDataAwayForm(dataForm);
  };
  const handleChangeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataForm({ ...dataForm, [name]: value });
  };
  return (
    <div className="create">
      <Typography variant="h4" component="h3" align="center">
        Thêm kết quả trận đấu
      </Typography>
      <form action="" className="form-create" onSubmit={handleCreateResult}>
        <Grid container alignItems="center" justify="center">
          <Grid container spacing={2}>
            <CreateResultItem onHandleSubmit={handleHomeSubmit} />
            <CreateResultItem onHandleSubmit={handleAwaySubmit} />
          </Grid>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  multiline
                  name="title"
                  onChange={handleChangeValue}
                />
                <FormHelperText id="my-helper-text">Nhập tiêu đề bài viết</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item lg={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="End Time"
                  variant="outlined"
                  multiline
                  name="endTime"
                  onChange={handleChangeValue}
                />
                <FormHelperText id="my-helper-text">Nhập thời gian kết thúc trận đấu</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item lg={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Thêm kết quả trận đấu
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateResult;
