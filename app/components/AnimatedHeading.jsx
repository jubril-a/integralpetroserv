'use client'

import { SplitText } from '@cyriacbr/react-split-text'
import { motion } from 'framer-motion'

export default function AnimatedHeading({ text}) {
    const variants = {
        initial: {y: '32px', opacity: 0},
        scrollUp: {y: '0px', opacity: 1}    
    }

    return (
        <SplitText LineWrapper={({ children }) => (
            <div className={`line-wrapper`} style={{height: "fit-content", overflow: "hidden"}}>
                <motion.div
                    variants={variants}
                    initial="initial"
                    whileInView="scrollUp"
                    transition={{ duration: 1.5, ease: [.246,.75,.187,1]}}
                    viewport={{ once: true }}
                >{children}</motion.div>

            </div>)}
        >
            {text}
        </SplitText>
    )
}