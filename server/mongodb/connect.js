import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery',true); //used when search functionality is used

    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));
}

export default connectDB;

