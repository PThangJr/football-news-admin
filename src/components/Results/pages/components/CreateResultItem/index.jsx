import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  NativeSelect,
  TextField,
  Typography,
} from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { getClubs } from '../../../../../app/actions/clubsAction';
import useStyles from './style';
import { fetchGetTournaments } from '../../../../../app/actions/tournamentsAction';
const indexItem = (target) => {
  return parseInt(target.split('-')[target.split('-').length - 1]);
};
const CreateResultItem = (props) => {
  const { onHandleSubmit } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const tournamentsData = useSelector((state) => state.tournamentsData);
  const clubsData = useSelector((state) => state.clubsData);
  const { clubs } = clubsData;
  const { tournaments } = tournamentsData;
  const [dataForm, setDataForm] = useState({});
  const [dataScores, setDataScores] = useState({});
  const [dataCheckbox, setDataCheckbox] = useState([]);
  const [totalScores, setTotalScores] = useState([1]);
  const tournamentId = dataForm.tournament;
  useEffect(() => {
    dispatch(fetchGetTournaments());
  }, [dispatch]);
  useEffect(() => {
    if (tournamentId) {
      dispatch(getClubs({ tournamentId }));
    }
  }, [dispatch, tournamentId]);
  useEffect(() => {
    if (onHandleSubmit) {
      onHandleSubmit(Object.assign(dataScores, dataCheckbox), dataForm);
    }
  }, [dataScores, dataCheckbox, dataForm, onHandleSubmit]);
  const handleChangeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataForm({ ...dataForm, [name]: value });
  };
  const handleChangeScoresValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataScores({
      ...dataScores,
      [name]: value,
    });
  };
  const handleCheckboxValue = (e) => {
    const name = e.target.name;
    const isChecked = e.target.checked;
    setDataCheckbox({ ...dataCheckbox, [name]: isChecked });
    // onHandleSubmit(dataCheckbox);
  };
  const handleAddScore = () => {
    setTotalScores([...totalScores, totalScores[totalScores.length - 1] + 1]);

    // console.log(totalScores);
  };
  const handleRemoveScore = (target) => {
    const newTotalScores = totalScores.filter((item) => item !== target);

    const newDataScores = Object.keys(dataScores).reduce((acc, cur) => {
      if (indexItem(cur) !== target) {
        acc[cur] = dataScores[cur];
      }
      return acc;
    }, {});
    setDataScores(newDataScores);
    setTotalScores(newTotalScores);
  };
  const handleSendValues = () => {
    const dataObj = Object.assign(dataScores, dataCheckbox);
    const dataObjKeys = Object.keys(dataObj);

    const dataResult = dataObjKeys.reduce((acc, cur) => {
      const obj = {};
      obj[cur] = dataObj[cur];
      acc.push(obj);
      return acc;
    }, []);
    console.log('dataREsult', dataResult);

    const result = dataObjKeys
      .reduce((acc, cur, index) => {
        let obj = {};
        if (cur.includes('player')) {
          obj = { player: dataObj[cur] };
          obj.goalAt =
            dataObj[dataObjKeys.find((data) => data.includes('goalAt') && indexItem(data) === indexItem(cur))];
          obj.penalty =
            dataObj[dataObjKeys.find((data) => data.includes('penalty') && indexItem(data) === indexItem(cur))] ||
            false;
          obj.ownGoal =
            dataObj[dataObjKeys.find((data) => data.includes('ownGoal') && indexItem(data) === indexItem(cur))] ||
            false;
          // dataScoresKeys.forEach(dataScoresKey => {
        }
        acc.push(obj);
        return acc;
      }, [])
      .filter((item) => Object.keys(item).length > 0);
    // console.log(result);
  };
  return (
    <Grid item lg={6}>
      <FormControl margin="normal">
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Tournaments
        </InputLabel>
        <NativeSelect
          //   value={state.age}
          onChange={handleChangeValue}
          inputProps={{
            name: 'tournament',
            id: 'age-native-label-placeholder',
          }}
        >
          <option value="">---None---</option>
          {tournaments.map((tour) => (
            <option key={tour._id} value={tour._id}>
              {tour.name}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>Chọn giải đấu</FormHelperText>
      </FormControl>
      <FormControl margin="normal">
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Football Clubs
        </InputLabel>
        <NativeSelect
          //   value={state.age}
          onChange={handleChangeValue}
          inputProps={{
            name: 'club',
            id: 'age-native-label-placeholder',
          }}
        >
          <option value="">---None---</option>
          {clubs.map((club) => (
            <option key={club._id} value={club._id}>
              {club.name}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>Chọn giải đấu</FormHelperText>
      </FormControl>
      {totalScores.map((item) => (
        <FormControl key={item} className={classes.scores} margin="normal">
          {item === totalScores[totalScores.length - 1] && (
            <span className="icon-plus" className={classes.iconPlus} onClick={handleAddScore}>
              <i className="fas fa-plus-circle"></i>
            </span>
          )}
          <TextField
            id="outlined-basic"
            label="Player"
            variant="outlined"
            name={`player-${item}`}
            // value={dataForm?.name}
            value={dataScores?.[`player-${item}`] || ''}
            onChange={handleChangeScoresValue}
          />
          <TextField
            id="outlined-basic"
            label="Goal At (minutes)"
            variant="outlined"
            value={dataScores?.[`goalAt-${item}`] || ''}
            name={`goalAt-${item}`}
            // value={dataForm?.name}
            onChange={handleChangeScoresValue}
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                checked={dataCheckbox?.[`penalty-${item}`] || false}
                onChange={handleCheckboxValue}
                name={`penalty-${item}`}
                color="primary"
              />
            }
            label="Penalty"
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                checked={dataCheckbox?.[`ownGoal-${item}`] || false}
                onChange={handleCheckboxValue}
                name={`ownGoal-${item}`}
                color="primary"
              />
            }
            label="Own Goal"
          />
          {/* <FormHelperText id="my-helper-text">Nhập Tỷ số</FormHelperText> */}
          {item !== 1 && (
            <span className="icon-plus" className={classes.iconPlus} onClick={() => handleRemoveScore(item)}>
              <i className="fas fa-times-circle" style={{ pointerEvents: 'none' }}></i>
            </span>
          )}
        </FormControl>
      ))}
      <Button onClick={handleSendValues}>Send</Button>
    </Grid>
  );
};

export default CreateResultItem;
