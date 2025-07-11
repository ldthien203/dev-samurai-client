import { useState } from 'react'
import { ClipLoader } from 'react-spinners'

const Spinner = () => {
  let [loading, setLoading] = useState(true)
  let [color, setColor] = useState('#ffffff')

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <ClipLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Spinner
