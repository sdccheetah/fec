export const buildGallery = ({ images, current }) => ({
  type: 'BUILD_GALLERY',
  payload: { images, current }
});
export const nextImage = currentIndex => ({
  type: 'NEXT_IMAGE',
  payload: currentIndex
});
export const prevImage = currentIndex => ({
  type: 'PREV_IMAGE',
  payload: currentIndex
});
