import { createStore } from 'redux'
import reducer from './reducer'

export default createStore(reducer, {
  isChecked: false,
  filteredProducts: [],
  filteredName: '',
  products: []
})