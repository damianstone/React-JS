import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Search from '../components/Search';
import CategoriesTitle from '../components/CategoriesTitle';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import { searchRequest } from '../actions/index';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals, search }) => {

  return (
    <>
      <Search isHome />

      {search.length > 1 && (
        <CategoriesTitle title='Search'>
          <Carousel>
            {search.map(item => (
              <CarouselItem
                key={item.id}
                {...item}
              />
            ))}
          </Carousel>
        </CategoriesTitle>
      )}

      {myList?.length > 0 && (
        <CategoriesTitle title='My List'>
          <Carousel>
            {myList?.map(item => (
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
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </CategoriesTitle>

      <CategoriesTitle title='Recommended for you'>
        <Carousel>
          {originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </CategoriesTitle>
    </>
  );
};

Home.propTypes = {
  myList: PropTypes.array,
  trends: PropTypes.array,
  originals: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    search: state.search,
  };
};

const mapDispatchToProps = {
  searchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

