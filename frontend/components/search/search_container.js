import { connect } from 'react-redux';
import { requestSearch, resetSearch } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    search: state.search
  });
};

const mapDispatchToProps = dispatch => ({
  requestSearch: search => dispatch(requestSearch(search)),
  resetSearch: () => dispatch(resetSearch())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Search);
