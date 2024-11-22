import { Loader2 } from "lucide-react"
import { Button } from "../ui/button"


const Home = () => {
  return (
    <div className="px-8 py-8 flex items-center justify-center mt-80">
      <Button>Click me</Button>

      <Button disabled>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
    </div>
  )
}

export default Home
