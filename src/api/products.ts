export const getProducts = async () => {
  const response = await fetch('https://.../products')

  if(!response){
    throw Error('Ошибка загрузки товаров')
  }
  
  return response.json()
}