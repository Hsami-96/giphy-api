import { GifProperties } from "../models/GifProperties";

export const mapToGifData = (data: any): GifProperties => ({
  height: data.images.original.height,
  size: data.images.original.size,
  url: data.images.original.url,
  width: data.images.original.width,
});
