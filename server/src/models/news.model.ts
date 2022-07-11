import mongoose from 'mongoose';
import { News } from '../../../client/src/interfaces/News.interface';

const Schema = mongoose.Schema;

const newsSchema = new Schema<News>({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    date: {
        type: String
    },
    content: {
        type: String
    },
    author: {
        type: String
    },
    archiveDate: {
        type: String
    },
}, {
    timestamps: true
});

const News = mongoose.model('News', newsSchema);
export default News;