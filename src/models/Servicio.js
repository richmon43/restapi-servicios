import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const servicioSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    entity: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      enum: ["Bogota", "Pasto", "Samaniego"],
    },
    value: {
      type: Number,
      trim: true,
      default: 0,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

servicioSchema.plugin(mongoosePaginate);
const Servicio = model("Servicio", servicioSchema);
export default Servicio;
