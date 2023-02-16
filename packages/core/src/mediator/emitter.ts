import mitt from "mitt";
import { EEvents } from "./constants";

const emitter = mitt<Record<EEvents, unknown>>();

export default emitter;
