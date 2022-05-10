import { useState } from "react"

function useLoad(initialValue = false) {
    const [load, setLoad] = useState(initialValue)
    const loadTrue = setLoad(true)
    return [loadTrue, load]
}

export default useLoad