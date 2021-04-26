import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchGetTournaments } from '../../../../app/actions/tournamentsAction';
import { createVideo } from '../../../../app/actions/videosAction';
import { videosType } from '../../../../app/constants';

const CreateVideo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const tournamentsData = useSelector((state) => state.tournamentsData);
  const videosData = useSelector((state) => state.videosData);

  const { errors, message } = videosData;

  useEffect(() => {
    dispatch(fetchGetTournaments());
    dispatch({ type: videosType.FETCH_CREATE_VIDEO_REQUEST });
  }, [dispatch]);
  let [tournamentsForm, setTournamentsForm] = useState({});
  const [dataForm, setDataForm] = useState(() => ({
    title: '',
    videoId: '',
    channelId: '',
    author: '',
  }));

  useEffect(() => {
    if (errors) {
      const errorsType = typeof errors?.message === 'object' && Object.keys(errors?.message);
      if (errorsType) {
        errorsType.forEach((et) => {
          enqueueSnackbar(errors.message?.[et], {
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          });
        });
      } else {
        enqueueSnackbar(errors?.message, {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });
      }
    } else if (message) {
      enqueueSnackbar(message, {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
    }
  }, [errors, message]);
  useEffect(() => {
    if (message === 'Thêm mới video thành công') {
      setDataForm({ title: '', videoId: '', channelId: '', author: '' });
      setTournamentsForm({});
    }
  }, [message]);

  const handleCheckboxTournaments = (e) => {
    const name = e.target.name;
    const isChecked = e.target.checked;
    setTournamentsForm({ ...tournamentsForm, [name]: isChecked });
  };
  const handleChangeInputValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataForm({ ...dataForm, [name]: value });
  };
  const handleCreateVideo = (e) => {
    e.preventDefault();
    // console.log(tournamentsForm);
    // console.log(dataForm);
    const tournamentsChecked = Object.keys(tournamentsForm).filter((tour) => tournamentsForm[tour] === true);
    const data = {
      tournaments: JSON.stringify(tournamentsChecked),
      ...dataForm,
    };
    dispatch(createVideo(data));
  };
  return (
    <div className="create">
      <Typography variant="h4" component="h3" align="center">
        Thêm video
      </Typography>
      <form action="" className="create" onSubmit={handleCreateVideo}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                name="title"
                value={dataForm?.title}
                onChange={handleChangeInputValue}
                multiline
              />
              <FormHelperText id="my-helper-text">Nhập tiêu đề video</FormHelperText>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Video Id"
                variant="outlined"
                name="videoId"
                value={dataForm?.videoId}
                onChange={handleChangeInputValue}
              />
              <FormHelperText id="my-helper-text">Nhập Video Id</FormHelperText>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Author"
                variant="outlined"
                name="author"
                value={dataForm?.author}
                onChange={handleChangeInputValue}
              />
              <FormHelperText id="my-helper-text">Nhập tác giả video</FormHelperText>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Channel Video Id"
                variant="outlined"
                name="channelId"
                value={dataForm?.channelId}
                onChange={handleChangeInputValue}
              />
              <FormHelperText id="my-helper-text">Nhập channel video Id</FormHelperText>
            </FormControl>
            {tournamentsData.tournaments.map((tour) => (
              <FormControlLabel
                key={tour._id}
                name={tour._id}
                control={<Checkbox color="primary" onChange={handleCheckboxTournaments} />}
                label={tour.name}
                checked={tournamentsForm?.tour?._id}
              />
            ))}
          </Grid>
          <Grid item lg={6}>
            {dataForm?.videoId && (
              <iframe
                style={{ width: '100%', height: '400px' }}
                title="video-youtube"
                src={`https://www.youtube.com/embed/${dataForm?.videoId}`}
              ></iframe>
            )}
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="center">
          <Grid item lg={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Thêm Video
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateVideo;
