import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addFavorite, addProduct } from "../redux/cartRedux";
import toast, { Toaster } from "react-hot-toast";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useHistory } from "react-router-dom";

const Trending = ({ item, loading }) => {
  const user = useSelector((state) => state.user.currentUser);
  const history = useHistory();
  const dispatch = useDispatch();

  // handle add to cart
  const handleAddToCart = () => {
    if (user) {
      try {
        dispatch(
          addProduct({
            ...item,
            quantity: 1,
            color: item?.color[0],
            size: item?.size[0],
          })
        );
        toast.success("Added to cart successfully");
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong! May be occurred ", error);
      }
    } else {
      history.push("/login");
    }
  };

  // add to favorite
  const handleAddToFavorite = () => {
    if (user) {
      try {
        dispatch(
          addFavorite({
            ...item,
            quantity: 1,
            color: item?.color[0],
            size: item?.size[0],
          })
        );
        toast.success("Added to favorite successfully");
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong! May be occurred ", error);
      }
    } else {
      history.push("/login");
    }
  };

  return (
    <>
      {loading ? (
        <Skeleton
          width="280px"
          height="200px"
          count={1}
          style={{
            margin: "12px 0px",
          }}
        />
      ) : (
        <Container>
          <Circle />
          <ImageWrapper>
            <Image src={item.img} />
          </ImageWrapper>
          <Info>
            <Icon onClick={handleAddToCart}>
              <ShoppingCartOutlined />
            </Icon>
            <Icon>
              <Link to={`/product/${item._id}`}>
                <SearchOutlined />
              </Link>
            </Icon>
            <Icon onClick={handleAddToFavorite}>
              <FavoriteBorderOutlined />
            </Icon>
          </Info>
          <Toaster />
        </Container>
      )}
    </>
  );
};

export default Trending;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 12px 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  box-sizing: border-box;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  mix-blend-mode: darken;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
