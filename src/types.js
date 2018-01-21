// @flow

type BaseImage = {
  url: string;
  width: string;
  height: string;
};

type SizedImage = {
  ...BaseImage,
  size: string;
}

export type Images = {
  fixed_height: {
    ...SizedImage,
    mp4: string,
    mp4_size: string,
    webp: string,
    webp_size: string
  },
  fixed_height_still: BaseImage,
  fixed_height_downsampled: {
    ...SizedImage,
    webp: string,
    webp_size: string
  },
  fixed_width: {
    ...SizedImage,
    mp4: string,
    mp4_size: string,
    webp: string,
    webp_size: string
  },
  fixed_width_still: BaseImage,
  fixed_width_downsampled: {
    ...SizedImage,
    webp: string,
    webp_size: string
  },
  fixed_height_small: {
    ...SizedImage,
    mp4: string,
    mp4_size: string,
    webp: string,
    webp_size: string
  },
  fixed_height_small_still: BaseImage,
  fixed_width_small: {
    ...SizedImage,
    mp4: string,
    mp4_size: string,
    webp: string,
    webp_size: string
  },
  fixed_width_small_still: {
    ...SizedImage,
    downsized: string,
  },
  downsized_still: BaseImage,
  downsized_large: SizedImage,
  downsized_medium: SizedImage,
  downsized_small: {
    ...SizedImage,
    original: string,
    frames: string,
    mp4: string,
    mp4_size: string,
    webp: string,
    webp_size: string
  }
};

export type GIFObject = {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  user: string;
  source_tld: string;
  source_post_url: string;
  update_datetime: string;
  create_datetime: string;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  title: string;
}
