import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { createNew } from '../../../../app/actions/newsAction';
import { fetchGetTournaments } from '../../../../app/actions/tournamentsAction';
import { newsType } from '../../../../app/constants';
import './styles.scss';
const CreateNew = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const tournamentsData = useSelector((state) => state.tournamentsData);
  const { tournaments } = tournamentsData;
  const newsData = useSelector((state) => state.newsData);
  const { message } = newsData;
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [file, setFile] = useState(null);
  let [tournamentsForm, setTournamentsForm] = useState({});
  const editorRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const topicRef = useRef();
  const sourceRef = useRef();
  const fileRef = useRef();
  const originalRef = useRef();
  const formRef = useRef();
  // console.log(tournaments);
  useEffect(() => {
    dispatch(fetchGetTournaments());
  }, [dispatch]);
  useEffect(() => {
    if (message) {
      history.push({
        pathname: '/news',
      });
    }
    return () => dispatch({ type: newsType.FETCH_CREATE_NEW_REQUEST });
  }, [message]);
  const handleChangeThumbnail = (e) => {
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
  const handleRemoveThumbnail = () => {
    setFile(null);
    setImagePreviewUrl(null);
    fileRef.current.value = '';
  };
  const handleCheckboxTournaments = (e) => {
    const name = e.target.name;
    const isChecked = e.target.checked;
    setTournamentsForm({ ...tournamentsForm, [name]: isChecked });
  };
  const handleCreateNew = (e) => {
    e.preventDefault();
    const content = editorRef.current.editor.getContents();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const topic = topicRef.current.value;
    const source = sourceRef.current.value;
    const original = originalRef.current.value;
    const tournamentsList = Object.keys(tournamentsForm).reduce((acc, cur) => {
      if (tournamentsForm[cur]) {
        acc.push(cur);
      }
      return acc;
    }, []);
    console.log(JSON.stringify(tournamentsList));

    const data = new FormData();
    data.append('thumbnail', file);
    data.append('content', content);
    data.append('tournaments', JSON.stringify(tournamentsList));
    data.append('title', title);
    data.append('topic', topic);
    data.append('description', description);
    data.append('source', source);
    data.append('originalLink', original);
    // const data = {
    //   content,
    //   tournament,
    //   title,
    //   description,
    //   topic,
    // };
    dispatch(createNew(data));
    // console.log(content);

    console.log('Data: ', data);
  };

  return (
    <Paper elevation={3}>
      <div className="create">
        <Typography variant="h3" component="h2" align="center">
          Tạo bài viết mới
        </Typography>
        <form action="" className="form-create" onSubmit={handleCreateNew} ref={formRef}>
          <Grid container spacing={2}>
            <Grid item lg={5}>
              <FormControl fullWidth>
                <TextField id="outlined-basic" label="Title" variant="outlined" multiline inputRef={titleRef} />
                <FormHelperText id="my-helper-text">Nhập tiêu đề bài viết</FormHelperText>
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  multiline
                  inputRef={descriptionRef}
                />
                <FormHelperText id="my-helper-text">Nhập mô tả bài viết</FormHelperText>
              </FormControl>
              <FormControl fullWidth>
                <TextField id="outlined-basic" label="Topic" variant="outlined" multiline inputRef={topicRef} />
                <FormHelperText id="my-helper-text">Nhập chủ đề</FormHelperText>
              </FormControl>

              <FormControl fullWidth>
                <input
                  type="file"
                  name="thumbnail"
                  className="input-file"
                  onChange={handleChangeThumbnail}
                  ref={fileRef}
                />
                {file && <img src={imagePreviewUrl} alt="thumnail" className="thumbnail-img" />}
                {file && (
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={handleRemoveThumbnail}
                  >
                    Delete
                  </Button>
                )}
                <FormHelperText id="my-helper-text">Nhập Thumbnail</FormHelperText>
              </FormControl>

              <FormGroup row>
                {tournaments.map((tour) => (
                  <FormControlLabel
                    key={tour._id}
                    name={tour._id}
                    control={<Checkbox color="primary" onChange={handleCheckboxTournaments} />}
                    label={tour.name}
                    checked={tournamentsForm?.tour?._id}
                  />
                ))}
              </FormGroup>
              <Grid container spacing={3}>
                <Grid item lg={6}>
                  <FormControl fullWidth>
                    <TextField id="outlined-basic" label="Source" variant="outlined" multiline inputRef={sourceRef} />
                    <FormHelperText id="my-helper-text">Nhập nguồn bài viết</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item lg={6}>
                  <FormControl fullWidth>
                    <TextField
                      id="outlined-basic"
                      label="Video Id"
                      variant="outlined"
                      multiline
                      inputRef={originalRef}
                    />
                    <FormHelperText id="my-helper-text">Nhập Video Id</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={7}>
              <FormControl fullWidth>
                <SunEditor
                  ref={editorRef}
                  setOptions={{
                    height: '265',
                    buttonList: buttonList.complex,
                  }}
                />

                <FormHelperText id="my-helper-text">Nhập nội dung bài viết</FormHelperText>
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Link original"
                  variant="outlined"
                  multiline
                  inputRef={originalRef}
                />
                <FormHelperText id="my-helper-text">Nhập Link của bài viết gốc</FormHelperText>
              </FormControl>
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
    </Paper>
  );
};

export default CreateNew;
