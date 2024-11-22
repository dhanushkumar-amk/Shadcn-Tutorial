import { AlertDialogDemo } from "./components/Home/Alert"
import Home from "./components/Home/Home"
import { Calendar } from "./components/ui/calendar"

const App = () => {
  return (
    <div>
        <Home/>
        <AlertDialogDemo/>
        <Calendar className="flex items-center justify-center mb-20"/>
        {/* <BreadcrumbDemo/> */}
    </div>
  )
}

export default App
