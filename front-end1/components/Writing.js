'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Writing = () => {
    return (
        <div className="py-2 text-lg top-menu">
            <Typewriter
                words={[
                    "Welcome to D-Gold Denim Jeans",
                    "Manufacturer and Exporter!",
                    "All Kinds Of Jeans Available",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={75}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </div>
    )
}

export default Writing