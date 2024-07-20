'use client'

import {motion} from 'framer-motion'
const Transition = () => {
  return (
    <motion.div
        initial= {{ y: 20, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        transition={{ ease: 'easeInOut', duration: 0.75}}
        >
    </motion.div>
  )
}

export default Transition


// export default function Transition({
//     children
// }: {
//     children: React.ReactNode
// }){
//     return
// }

