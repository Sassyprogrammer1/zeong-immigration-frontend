import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Type from 'enl-styles/Typography.scss';
import Rating from '../Rating/Rating';
import styles from './cardStyle-jss';

function CourseCard(props) {
  const {
    classes,
    discount,
    soldout,
    thumbnail,
    name,
    desc,
    rating,
    price,
    prevPrice,
    list,
    detailOpen,
    addToCart,
    width,
  } = props;
  return (
    <Card className={classNames(classes.cardProduct, isWidthUp('sm', width) && list ? classes.cardList : '')}>
      <div className={classes.status}>
        {discount !== '' && (
          <Chip label={'GRADUATE PROGRAM'} className={classes.chipDiscount} />
        )}
        {soldout && (
          <Chip label="
          UNDERGRADUATE PROGRAM" className={classes.chipSold} />
        )}
      </div>
      <CardMedia
        className={classes.mediaProduct}
        image={thumbnail}
        title={name}
      />
      <CardContent className={classes.floatingButtonWrap}>
        {!soldout && (
          <Tooltip title="Add to cart" placement="top">
            <Fab onClick={addToCart} size="small" color="secondary" aria-label="add" className={classes.buttonAdd}>
              <AddShoppingCart />
            </Fab>
          </Tooltip>
        )}
        <Typography noWrap gutterBottom variant="h5" className={classes.title} component="h2">
          {name}
        </Typography>
        <Typography component="p" className={classes.desc}>
          {desc}
        </Typography>

        <Typography variant="body2" style={{
          marginTop: '5px',
          fontWeight: 700,
        }} >
                    Programme Duration : 4 years
        </Typography>
        <Typography variant="body2" style={{
          marginTop: '5px',
          fontWeight: 700,
        }} >
                    Program:  M.P.Acc
        </Typography>

        {/* <div className={classes.ratting}>
                    {rating > 0 ? <Rating value={rating} max={5} readOnly /> : <div className={classes.emptyRating} />}

                </div> */}
        <Button className={classes.deatialButton} size="small" variant="outlined" color="secondary" onClick={detailOpen}>
                    See Detail
        </Button>
      </CardContent>
      <CardActions className={classes.price}>
        {/* <Typography variant="h5">
                    <span>
                        $
                        {price}
                    </span>
                </Typography> */}
        {/* {prevPrice > 0 && (
                    <Typography variant="caption" component="h5">
                        <span className={Type.lineThrought}>
                            $
                            {prevPrice}
                        </span>
                    </Typography>
                )} */}
        <div className={classes.rightAction}>

          {/* {!soldout && (
                        <Tooltip title="Add to cart" placement="top">
                            <IconButton color="secondary" onClick={addToCart} className={classes.buttonAddList}>
                                <AddShoppingCart />
                            </IconButton>
                        </Tooltip>
                    )} */}
        </div>
      </CardActions>
    </Card>
  );
}

CourseCard.propTypes = {
  classes: PropTypes.object.isRequired,
  discount: PropTypes.string,
  width: PropTypes.string.isRequired,
  soldout: PropTypes.bool,
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  prevPrice: PropTypes.number,
  list: PropTypes.bool,
  detailOpen: PropTypes.func,
  addToCart: PropTypes.func,
};

CourseCard.defaultProps = {
  discount: '',
  soldout: false,
  prevPrice: 0,
  list: false,
  detailOpen: () => (false),
  addToCart: () => (false),
};

const ProductCardResponsive = withWidth()(CourseCard);
export default withStyles(styles)(ProductCardResponsive);
