import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import CategoriesTitle from '../components/CategoriesTitle';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {

  return (
    <>
      <Search />

      {myList?.length > 0 && (
        <CategoriesTitle title='My List'>
          <Carousel>
            {myList?.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            ))}
          </Carousel>
        </CategoriesTitle>
      )}

      <CategoriesTitle title='Trends'>
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </CategoriesTitle>

      <CategoriesTitle title='Recommended for you'>
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </CategoriesTitle>

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);

