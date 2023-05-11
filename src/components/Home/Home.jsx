import { useEffect, useState } from "react"
import Confetti from 'react-confetti'

import Winners from "../Winners/Winners"
import DataEntry from "../DataEntry/DataEntry"
import Results from "../Results/Results"

export default function Home () {
  const [names, setNames] = useState([])
  const [winner, setWinner] = useState(1)
  const [winners, setWinners] = useState([])
  const [showConfetti, setShowConfetti] = useState(false)

  const isDisabled = names.length === 0 || winner === 0 || winner > names.length || winner < 1 || winner === null;

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValor = e.target.nombre.value
    if (!inputValor) return

    const sinEspacio = inputValor.split(' ')
    sinEspacio.map(name => {
      if (name.length > 0) {
        if (name.includes(',')) {
          const nameSplit = name.split(',')
          const namesFilter = nameSplit.filter(name => name.length > 0)
          return setNames(prev => [...prev, ...namesFilter])

        }
        setNames(prev => [...prev, name])
      }
    })
    e.target.nombre.value = ""
  }

  const handleReset = () => {
    setNames([])
    setWinner(1)
    setWinners([])

  }

  const handleSort = (array, n) => {
    let winners = []
    setTimeout(() => {
      for (let i = 0; i < n; i++) {
        let index = Math.floor(Math.random() * array.length)
        while (winners.includes(array[index])) {
          index = Math.floor(Math.random() * array.length)
        }
        winners.push(array[index])
      }
      setWinners(winners)
      setShowConfetti(true)
    }, 500);
    setShowConfetti(false)

  }

  useEffect(() => {
    setTimeout(() => {
      setShowConfetti(false)
    }, 8000);
    setShowConfetti(true)
    console.log(showConfetti)
  }, [winners])

  return (
    <div className="pt-10 ">
      <h1 className="text-center text-3xl font-bold pb-6 text-gray-200 bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent via-teal-500">Elegir el ganador del Sorteo</h1>

      <div className="grid justify-center md:grid-cols-2 grid-cols-1 md:gap-y-4">
        <DataEntry handleSubmit={handleSubmit} names={names} />

        <Results names={names} winner={winner} setWinner={setWinner} handleSort={handleSort} />
      </div>
      <hr className="w-3/4 mx-auto border-gray-300 my-4 " />
      <div className="flex justify-center mt-4">
        <button disabled={isDisabled} onClick={() => handleSort(names, winner)} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sortear</button>

        <button disabled={isDisabled} onClick={handleReset} className="relative inline-flex items-center justify-center p-2 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" >Borrar nombres</button>
      </div>
      {
        winners.length > 0 ?
          <div className="flex flex-col items-center">
            <Winners winners={winners} />
            {
              showConfetti && <Confetti />
            }
          </div>
          : null
      }
    </div>
  )
}
