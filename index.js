const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
    const files = await imagemin(['img/*.{jpg,png}'], 'build/img', {
        plugins: [
            imageminJpegtran(),
            imageminPngquant({quality: '80-100'})
        ]
    });

    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
})();
