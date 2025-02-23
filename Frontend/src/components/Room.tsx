import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"


const Room = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const name = searchParams.get("name")

    useEffect(()=>{
        // logic to initiate room
    },[name])
  return (
    <div>
      Hii {name}
    </div>
  )
}

export default Room
