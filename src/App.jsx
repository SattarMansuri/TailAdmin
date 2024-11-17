
import { useContext } from 'react'
import './App.css'
import FormContext from './components/Context'
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Sidebar from './components/Sidebar'

function App() {
  // const [form, setform] = useState(false)
  const { form } = useContext(FormContext)
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        {
          !form ? <Dashboard /> :
            <Form />
        }
      </div>
    </>
  )
}

export default App
