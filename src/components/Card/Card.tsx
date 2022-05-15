import React from 'react'
import { motion, Variants } from 'framer-motion'

import * as S from './styles'

const Card: React.FC<{ img: string }> = ({ img }) => {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.1,
        duration: 0.8
      }
    }
  }
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="card" variants={cardVariants}>
        <S.CardContainer>
          <S.Image src={img} />
        </S.CardContainer>
      </motion.div>
    </motion.div>
  )
}

export default Card
