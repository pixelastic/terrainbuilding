const theme = require('norska/theme');
const lazyloadHelper = require('norska/frontend/algolia/helpers/lazyload');

(async () => {
  await theme.init({
    placeholder: 'Search for dungeon tiles, house, castle, sewers, anything!',
    hitName: 'picture',
    transforms: {
      img(item) {
        const originUrl = item.picture.url;
        const options = {
          imoen: item.picture,
          uuid: item.objectID,
          cacheBusting: false,
          cloudinary: 'pixelastic-terrainbuilding',
        };
        const img = lazyloadHelper.attributes(originUrl, options);

        return img;
      },
    },
  });
})();
