import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { connect } from 'react-redux'

class FilterableProductTable extends React.Component {

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5ce317f13400001d8677389d')
      .then(res => res.json())
      .then(res => {
        this.props.chegouProdutu(res.products)
      })
  }

  render() {
    let products = {}
    if (this.props.isChecked || this.props.filteredName !== '') {
      products = this.props.filteredProducts
    } else {
      products = this.props.products
    }

    return (
      <div>
        <SearchBar />
        <ProductTable products={products} />
      </div>
    );
  }

};

const mapStateToProps = (state /*, ownProps*/) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    chegouProdutu: (payload) => {
      dispatch({
        type: "CHEGO_PRODUTU",
        payload: payload
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterableProductTable)