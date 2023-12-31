export const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            delayChildren: 0.4,
            staggerChildren: 0.2
        }
    }
}

export const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
        }
    }
}


export const menuItem = {
    initial: {
        scale: 1.2, transition: {
            duration: .8, type: 'spring'
        }
    },
    animate: { y: -26 },
    transition: { duration: 2, type: 'spring' }
}
