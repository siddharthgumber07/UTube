import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";



const videoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    videoFile:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    likeCount:{
        type:Number,
        default:0
    },
    dislikeCount:{
        type:Number,
        default:0
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});


videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video",videoSchema);