import './App.css'
import Header from "./components/Header"
import Card from './components/Card'
import data from "./data.js"

function App() {

  const dataHtml = data.map(item => {
    return <Card key={item.id} {...item} />
  })
  return (
    <div className="App">
      <Header />
      <div className='cards'>
        {dataHtml}
      </div>
    </div>
  )
}

export default App
