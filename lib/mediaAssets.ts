// Media categorization based on image analysis
// Day images: Brighter, warmer tones from /media/ folder
// Night images: Beautiful nighttime shots from /media/night/ folder

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const withBasePath = (path: string) => `${basePath}${path}`;

export const mediaAssets = {
  day: {
    hero: [
      withBasePath('/media/WAA_6656-HDR.JPG'),
      withBasePath('/media/WAA_6670-HDR.JPG'),
      withBasePath('/media/WAA_6682-HDR.JPG'),
      withBasePath('/media/WAA_6700-HDR.JPG'),
      withBasePath('/media/WAA_6706-HDR.JPG')
    ],
    gallery: [
      withBasePath('/media/WAA_6656-HDR.JPG'),
      withBasePath('/media/WAA_6659-HDR.JPG'),
      withBasePath('/media/WAA_6667-HDR.JPG'),
      withBasePath('/media/WAA_6670-HDR.JPG'),
      withBasePath('/media/WAA_6673-HDR.JPG'),
      withBasePath('/media/WAA_6676-HDR.JPG'),
      withBasePath('/media/WAA_6679-HDR.JPG'),
      withBasePath('/media/WAA_6682-HDR.JPG'),
      withBasePath('/media/WAA_6685-HDR.JPG'),
      withBasePath('/media/WAA_6691-HDR.JPG'),
      withBasePath('/media/WAA_6694-HDR.JPG'),
      withBasePath('/media/WAA_6700-HDR.JPG'),
      withBasePath('/media/WAA_6703-HDR.JPG'),
      withBasePath('/media/WAA_6706-HDR.JPG')
    ],
    accommodations: [
      withBasePath('/media/WAA_6656-HDR.JPG'),
      withBasePath('/media/WAA_6670-HDR.JPG'),
      withBasePath('/media/WAA_6682-HDR.JPG')
    ],
    spa: withBasePath('/media/WAA_6700-HDR.JPG'),
    dining: withBasePath('/media/WAA_6694-HDR.JPG'),
    experiences: withBasePath('/media/WAA_6706-HDR.JPG')
  },
  night: {
    hero: [
      withBasePath('/media/night/DSC00098-HDR-Pano.JPG'),
      withBasePath('/media/night/DSC00098-HDR-Pano-2.JPG'),
      withBasePath('/media/night/DSC00146-HDR.JPG'),
      withBasePath('/media/night/DSC00170-HDR.JPG'),
      withBasePath('/media/night/DSC00110-HDR.JPG')
    ],
    gallery: [
      withBasePath('/media/night/DSC00089-HDR.JPG'),
      withBasePath('/media/night/DSC00092-HDR.JPG'),
      withBasePath('/media/night/DSC00095-HDR.JPG'),
      withBasePath('/media/night/DSC00098-HDR.JPG'),
      withBasePath('/media/night/DSC00104-HDR.JPG'),
      withBasePath('/media/night/DSC00110-HDR.JPG'),
      withBasePath('/media/night/DSC00116-HDR.JPG'),
      withBasePath('/media/night/DSC00146-HDR.JPG'),
      withBasePath('/media/night/DSC00146-HDR-2.JPG'),
      withBasePath('/media/night/DSC00149-HDR.JPG'),
      withBasePath('/media/night/DSC00152-HDR.JPG'),
      withBasePath('/media/night/DSC00170-HDR.JPG'),
      withBasePath('/media/night/DSC00173-HDR.JPG'),
      withBasePath('/media/night/DSC00176-HDR.JPG'),
      withBasePath('/media/night/DSC00179-HDR.JPG'),
      withBasePath('/media/night/DSC00182-HDR.JPG'),
      withBasePath('/media/night/DSC00185-HDR.JPG'),
      withBasePath('/media/night/DSC00188-2-HDR.JPG'),
      withBasePath('/media/night/DSC00191-HDR.JPG'),
      withBasePath('/media/night/DSC00098-HDR-Pano.JPG'),
      withBasePath('/media/night/DSC00098-HDR-Pano-2.JPG')
    ],
    accommodations: [
      withBasePath('/media/night/DSC00170-HDR.JPG'),
      withBasePath('/media/night/DSC00173-HDR.JPG'),
      withBasePath('/media/night/DSC00176-HDR.JPG')
    ],
    spa: withBasePath('/media/night/DSC00185-HDR.JPG'),
    dining: withBasePath('/media/night/DSC00146-HDR.JPG'),
    experiences: withBasePath('/media/night/DSC00098-HDR-Pano.JPG')
  }
};

export function getMediaForTheme(section: keyof typeof mediaAssets.day, theme: 'light' | 'dark') {
  return theme === 'light' ? mediaAssets.day[section] : mediaAssets.night[section];
}
