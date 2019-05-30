import React from 'react';
import { connect } from 'react-redux'

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.handleInStock = this.handleInStock.bind(this)
    this.handleProductByName = this.handleProductByName.bind(this)
  }

  handleInStock() {
    const filteredProducts = this.props.products.filter(({ stocked }) => stocked)
    const isChecked = !this.props.isChecked
    this.props.filterJustInStock({
      isChecked: isChecked,
      filteredProducts: filteredProducts
    })
  }

  handleProductByName(event) {
    const filteredName = event.currentTarget.value
    const filteredProducts = this.props.products.filter(({ name }) => {
      return name.toLocaleLowerCase().includes(filteredName.toLocaleLowerCase())
    })
    this.props.filterByName({
      filteredProducts: filteredProducts,
      filteredName: filteredName
    })

  }

  render() {

    return (
      <div>
        <input onChange={this.handleProductByName} type="text"></input><br />
        <input onChange={this.handleInStock} type="checkbox" checked={this.props.isChecked}></input>Filtrar em estoque
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    isChecked: state.isChecked,
    products: state.products,
    filteredName: state.filteredName
  }
}

const mapDispatcherToProps = (dispatch) => {
  return {
    filterJustInStock: (payload) => {
      dispatch({
        type: 'FILTRA_AI_MANO',
        payload: payload
      });
    },
    filterByName: (payload) => {
      dispatch({
        type: 'FILTRA_POR_NOME_AI_XUXU',
        payload: payload
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatcherToProps
)(SearchBar)