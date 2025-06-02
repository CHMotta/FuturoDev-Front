import Button from './components/atoms/Button'
import PriceTag from './components/atoms/PriceTag'
import PlantIcon from './components/atoms/PlantIcon'

function App() {
  
  return (
    <>
      <Button text='apertar' variant='primary'/>
      <Button text='clicar' variant='secondary'/>
      <PriceTag priceTag={12.30}/>
      <PlantIcon size={'sm'}/>
      <PlantIcon size={'md'}/>
      <PlantIcon size={'lg'}/>
    </>
  )
}

export default App
