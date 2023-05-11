import { motion } from 'framer-motion'

export default function DataEntry ({ handleSubmit, names }) {
  return (
    <div className='flex  relative place-self-center flex-col items-center'>
      <form onSubmit={handleSubmit} className="flex items-center flex-col gap-3 justify-center">
        <label htmlFor="inputNombre" className="flex justify-center text-slate-50">Ingresa los nombres separados por comas:</label>
        <input type="text" id="inputNombre" name="nombre" placeholder="Ej: Pedro, Juan, Ana ..." className='w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none' />
        <button type="submit" className='flex w-40 items-center justify-center p-0.5  rounded-lg group bg-gradient-to-br from-green-400 to-blue-600  group-hover:to-blue-600 hover:text-white dark:text-white dark:focus:ring-green-800'>Agregar</button>
      </form>
      <ul className="grid grid-cols-3 w-72 justify-center justify-items-center min-h-[4rem] gap-1 border-dashed border-2 border-sky-500 p-3 m-4">
        {
          names.length > 0 && (names.map((name, index) => (
            <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={index} className='text-slate-200' >
              {name}
            </motion.li>
          )))
        }
      </ul>
    </div>
  )
}
