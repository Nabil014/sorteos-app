
export default function Results ({ setWinner }) {

  return (
    <form className="flex flex-col gap-2  items-center">
      <label htmlFor="inputWinner" className="text-slate-50">Cantidad de ganadores:</label>
      <input type="number" id="inputWinner" defaultValue={1} name="winner" onChange={(e) => setWinner(e.target.value)} className="w-16 text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" />
    </form>
  )
}
