import { motion } from 'framer-motion'

export default function Winners ({ winners }) {


  return (

    <motion.div animate={{ y: 10, opacity: 1, borderRadius: 20 }} transition={{ duration: 2 }} initial={{ opacity: 0 }} className="bg-[#f0deff] min-h-[5rem] border-2 border-[#5decd0] w-[30vw] items-center gap-1 max-w-md flex flex-col py-2 ">

      {
        winners.map((winner, index) => (
          <motion.span animate={{ opacity: 1 }} transition={{ duration: 1.5 }} initial={{ opacity: 0 }} key={index} className="text-black font-normal py-[0.5px]">
            <hr className='border-black w-28 mx-auto' />
            {"Puesto " + (index + 1) + " : " + winner}
          </motion.span>
        ))
      }

    </motion.div>

  )
}
