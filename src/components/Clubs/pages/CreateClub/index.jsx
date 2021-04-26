import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetTournaments } from '../../../../app/actions/tournamentsAction';
import { createClub } from '../../../../app/actions/clubsAction';
import { useSnackbar } from 'notistack';

const CreateClub = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [file, setFile] = useState(null);
  const [dataForm, setDataForm] = useState(() => ({
    name: '',
    shortname: '',
    codename: '',
  }));
  let [tournamentsForm, setTournamentsForm] = useState({});
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const fileRef = useRef();
  useEffect(() => {
    dispatch(fetchGetTournaments());
  }, [dispatch]);
  const tournamentsData = useSelector((state) => state.tournamentsData);
  const { message, errors } = useSelector((state) => state.clubsData);
  useEffect(() => {
    if (errors) {
      enqueueSnackbar(errors.message, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
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
  const handleChangeLogo = (e) => {
    e.preventDefault();
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    const file = e.target.files[0];
    if (file && allowedTypes.includes(file.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
        setFile(file);
      };
      reader.readAsDataURL(file);
    } else {
      setFile(null);
      setImagePreviewUrl(null);
    }
  };
  const handleRemoveLogo = () => {
    setFile(null);
    setImagePreviewUrl(null);
    fileRef.current.value = '';
  };
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
  const handleCreateClub = (e) => {
    e.preventDefault();
    const { name, codename, shortname } = dataForm;
    const tournamentsChecked = Object.keys(tournamentsForm).filter((tour) => tournamentsForm[tour] === true);
    const data = new FormData();
    data.append('name', name);
    if (shortname) {
      data.append('shortname', shortname);
    }
    data.append('tournaments', JSON.stringify(tournamentsChecked));
    data.append('codename', codename);
    data.append('logo', file);
    // console.log(tournamentsForm);
    // console.log(dataForm);
    dispatch(createClub(data));
  };
  return (
    <div className="create">
      <Typography variant="h4" component="h3" align="center">
        Thêm đội bóng
      </Typography>
      <form action="" className="create" onSubmit={handleCreateClub}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Name Club"
                variant="outlined"
                name="name"
                value={dataForm?.name}
                onChange={handleChangeInputValue}
                multiline
              />
              <FormHelperText id="my-helper-text">Nhập Tên đội bóng</FormHelperText>
            </FormControl>
            <Grid container spacing={2}>
              <Grid item lg={6}>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    label="Short name club"
                    variant="outlined"
                    name="shortname"
                    value={dataForm?.shortname}
                    onChange={handleChangeInputValue}
                    multiline
                  />
                  <FormHelperText id="my-helper-text">Nhập tên rút gọn đội bóng</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item lg={6}>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    label="Code name club"
                    variant="outlined"
                    name="codename"
                    value={dataForm?.codename}
                    onChange={handleChangeInputValue}
                    multiline
                  />
                  <FormHelperText id="my-helper-text">Nhập tên mã đội bóng</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <FormControl fullWidth>
              <input type="file" name="thumbnail" className="input-file" onChange={handleChangeLogo} ref={fileRef} />
              {file && <img src={imagePreviewUrl} alt="thumnail" className="thumbnail-img" />}
              {file && (
                <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={handleRemoveLogo}>
                  Delete
                </Button>
              )}
              <FormHelperText id="my-helper-text">Nhập Logo</FormHelperText>
            </FormControl>
            <FormGroup row>
              {tournamentsData.tournaments.map((tour) => (
                <FormControlLabel
                  key={tour._id}
                  name={tour._id}
                  control={<Checkbox color="primary" onChange={handleCheckboxTournaments} />}
                  label={tour.name}
                  checked={tournamentsForm?.tour?._id}
                />
              ))}
            </FormGroup>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="center">
          <Grid item lg={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Thêm bài viết
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateClub;
