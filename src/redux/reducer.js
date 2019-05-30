export default function (state, action) {
  if (action.type === 'CHEGO_PRODUTU') {
    return Object.assign({}, state, {
      products: action.payload
    })
  }

  if (action.type === 'FILTRA_AI_MANO') {
    return Object.assign({}, state, {
      isChecked: action.payload.isChecked,
      filteredProducts: action.payload.filteredProducts
    })
  }

  if (action.type === 'FILTRA_POR_NOME_AI_XUXU') {
    console.log("to onde preciso")
    return Object.assign({}, state, {
      filteredProducts: action.payload.filteredProducts,
      filteredName: action.payload.filteredName
    })
  }

  return state
}