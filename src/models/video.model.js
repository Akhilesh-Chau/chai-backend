import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      tyle: String, // cloudinary url
      required: true,
    },
    thumnail: {
      tyle: String, // cloudinary url
      required: true,
    },
    tittle: {
      tyle: String,
      required: true,
    },
    description: {
      tyle: String,
      required: true,
    },
    duration: {
      tyle: Number,
      required: true,
    },
    views: {
      tyle: Number,
      default: 0,
    },
    isPublished: {
      types: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
