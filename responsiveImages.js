const configs = [
    {width: '256px', rename: {suffix: '-256'}},
    {width: '533px', rename: {suffix: '-533'}},
    {width: '850px', rename: {suffix: '-850'}},
    {width: '1080px', rename: {suffix: '-1080'}},
    {width: '1260px', rename: {suffix: '-1260'}},
    {width: '1410px', rename: {suffix: '-1410'}}
]
const images = [
  path.join(__dirname, 'whatsnext.jpg'),
]

generateResponsiveImages(images, configs)