// Media categorization based on image analysis
// Day images: Brighter, warmer tones from /media/ folder
// Night images: Beautiful nighttime shots from /media/night/ folder
//
// TODO(owner): verify which photos belong to which room type and
// re-map `rooms.jacuzzi` / `rooms.balcony` accordingly.

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const withBasePath = (path: string) => `${basePath}${path}`;

export const mediaAssets = {
  day: {
    hero: [
      withBasePath('/media/WAA_6656-HDR.webp'),
      withBasePath('/media/WAA_6670-HDR.webp'),
      withBasePath('/media/WAA_6682-HDR.webp'),
      withBasePath('/media/WAA_6700-HDR.webp'),
      withBasePath('/media/WAA_6706-HDR.webp')
    ],
    gallery: [
      withBasePath('/media/WAA_6656-HDR.webp'),
      withBasePath('/media/WAA_6659-HDR.webp'),
      withBasePath('/media/WAA_6667-HDR.webp'),
      withBasePath('/media/WAA_6670-HDR.webp'),
      withBasePath('/media/WAA_6673-HDR.webp'),
      withBasePath('/media/WAA_6676-HDR.webp'),
      withBasePath('/media/WAA_6679-HDR.webp'),
      withBasePath('/media/WAA_6682-HDR.webp'),
      withBasePath('/media/WAA_6685-HDR.webp'),
      withBasePath('/media/WAA_6691-HDR.webp'),
      withBasePath('/media/WAA_6694-HDR.webp'),
      withBasePath('/media/WAA_6700-HDR.webp'),
      withBasePath('/media/WAA_6703-HDR.webp'),
      withBasePath('/media/WAA_6706-HDR.webp')
    ],
    rooms: {
      jacuzzi: [
        withBasePath('/media/WAA_6656-HDR.webp'),
        withBasePath('/media/WAA_6670-HDR.webp'),
        withBasePath('/media/WAA_6685-HDR.webp')
      ],
      balcony: [
        withBasePath('/media/WAA_6682-HDR.webp'),
        withBasePath('/media/WAA_6691-HDR.webp'),
        withBasePath('/media/WAA_6679-HDR.webp')
      ]
    },
    amenities: withBasePath('/media/WAA_6700-HDR.webp'),
    explore: withBasePath('/media/WAA_6706-HDR.webp'),
    policies: withBasePath('/media/WAA_6694-HDR.webp')
  },
  night: {
    hero: [
      withBasePath('/media/night/DSC00098-HDR-Pano.webp'),
      withBasePath('/media/night/DSC00098-HDR-Pano-2.webp'),
      withBasePath('/media/night/DSC00146-HDR.webp'),
      withBasePath('/media/night/DSC00170-HDR.webp'),
      withBasePath('/media/night/DSC00110-HDR.webp')
    ],
    gallery: [
      withBasePath('/media/night/DSC00089-HDR.webp'),
      withBasePath('/media/night/DSC00092-HDR.webp'),
      withBasePath('/media/night/DSC00095-HDR.webp'),
      withBasePath('/media/night/DSC00098-HDR.webp'),
      withBasePath('/media/night/DSC00104-HDR.webp'),
      withBasePath('/media/night/DSC00110-HDR.webp'),
      withBasePath('/media/night/DSC00116-HDR.webp'),
      withBasePath('/media/night/DSC00146-HDR.webp'),
      withBasePath('/media/night/DSC00146-HDR-2.webp'),
      withBasePath('/media/night/DSC00149-HDR.webp'),
      withBasePath('/media/night/DSC00152-HDR.webp'),
      withBasePath('/media/night/DSC00170-HDR.webp'),
      withBasePath('/media/night/DSC00173-HDR.webp'),
      withBasePath('/media/night/DSC00176-HDR.webp'),
      withBasePath('/media/night/DSC00179-HDR.webp'),
      withBasePath('/media/night/DSC00182-HDR.webp'),
      withBasePath('/media/night/DSC00185-HDR.webp'),
      withBasePath('/media/night/DSC00188-2-HDR.webp'),
      withBasePath('/media/night/DSC00191-HDR.webp'),
      withBasePath('/media/night/DSC00098-HDR-Pano.webp'),
      withBasePath('/media/night/DSC00098-HDR-Pano-2.webp')
    ],
    rooms: {
      jacuzzi: [
        withBasePath('/media/night/DSC00170-HDR.webp'),
        withBasePath('/media/night/DSC00173-HDR.webp'),
        withBasePath('/media/night/DSC00179-HDR.webp')
      ],
      balcony: [
        withBasePath('/media/night/DSC00176-HDR.webp'),
        withBasePath('/media/night/DSC00185-HDR.webp'),
        withBasePath('/media/night/DSC00182-HDR.webp')
      ]
    },
    amenities: withBasePath('/media/night/DSC00185-HDR.webp'),
    explore: withBasePath('/media/night/DSC00098-HDR-Pano.webp'),
    policies: withBasePath('/media/night/DSC00146-HDR.webp')
  }
};

// Equirectangular panoramas (~2:1) for the 360° tour — night shots.
export const panos = [
  {
    src: withBasePath('/media/night/DSC00098-HDR-Pano.webp'),
    label: 'Night Terrace'
  },
  {
    src: withBasePath('/media/night/DSC00098-HDR-Pano-2.webp'),
    label: 'Night Garden'
  }
];

export function getMediaForTheme(section: keyof typeof mediaAssets.day, theme: 'light' | 'dark') {
  return theme === 'light' ? mediaAssets.day[section] : mediaAssets.night[section];
}
