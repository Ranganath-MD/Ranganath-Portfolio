export const variants = {
    hidden:{
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

export const item = {
    hidden:{
      opacity: 0,
      y: 50
    },
    show: {
      opacity: 1,
      y:0,
      transition: {
        duration: 0.8,
      }
    }
  }

export const img_variants = {
   hidden: {
     opacity: 0,
     scale: 0
   },
   show: {
     opacity: 1,
     scale: .9,
     transition: {
       delay: 1.5, 
       duration: 1.5, 
       type: 'spring', 
       stiffness: 100 
      }
   }
 }
