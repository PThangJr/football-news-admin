import {
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';
import { deleteNew, getNews } from '../../app/actions/newsAction';
import useStyles from './styles';
import './styles.scss';

const News = () => {
  const classes = useStyles();
  const newsData = useSelector((state) => state.newsData);
  const { loading, news } = newsData;
  // console.log(newsData);
  const dispatch = useDispatch();
  useEffect(() => {
    const config = {
      params: {
        limit: 8,
        page: 1,
      },
    };
    dispatch(getNews(config));
  }, [dispatch]);
  const handleDeleteNew = (id) => {
    if (window.confirm('Bạn có muốn xóa bài viết??')) {
      dispatch(deleteNew(id));
    }
  };
  const renderNews = () => {
    if (loading) {
      return <h1>Loading...</h1>;
    } else {
      return news.map((newItem) => (
        <Grid item lg={3} key={newItem._id}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={newItem?.thumbnail?.secure_url}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className="news-title">
                  {newItem?.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <ButtonGroup fullWidth>
                <Button variant="contained" color="primary">
                  Sửa
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleDeleteNew(newItem?._id)}>
                  Xóa
                </Button>
              </ButtonGroup>
            </CardActions>
          </Card>
        </Grid>
      ));
    }
  };
  return (
    <div className="news">
      <LinkRouter to="news/create" className="news-link">
        <Button variant="contained" color="primary" className="btn btn--add">
          <i className="fas fa-plus-square icon-left"></i>
          Tạo bài viết
        </Button>
      </LinkRouter>
      <Grid container spacing={3}>
        {renderNews()}
      </Grid>
    </div>
  );
};

export default News;
