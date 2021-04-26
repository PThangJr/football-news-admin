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
import React from 'react';
import { Link } from 'react-router-dom';

const Videos = () => {
  return (
    <div className="videos">
      <Link to="videos/create" className="news-link">
        <Button variant="contained" color="primary" className="btn btn--add">
          <i className="fas fa-plus-square icon-left"></i>
          Thêm videos
        </Button>
      </Link>

      <Grid item lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image=""
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" className="news-title">
                Đây là video gì đấy
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ButtonGroup fullWidth>
              <Button variant="contained" color="primary">
                Sửa
              </Button>
              <Button variant="contained" color="secondary">
                Xóa
              </Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
};

export default Videos;
