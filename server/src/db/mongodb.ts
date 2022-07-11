import mongoose from "mongoose";

// mongoose.connect('mongodb://mongo:27017/news', () => {
//     console.log('connected to database')
// })

mongoose.connect('mongodb://localhost:27017/news', () => {
    console.log('connected to database')
})

export default mongoose;