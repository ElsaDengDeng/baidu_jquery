fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*.{js,js,css,jpg,png}', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});
fis.match('*.html', {
  //invoke fis-optimizer-html-minifier
  optimizer: fis.plugin('html-minifier')
});


// 模块化
// npm install [-g] fis3-hook-amd
fis.hook('amd');

fis.match('/comp/**/*.js', {
    isMod: true, // 设置 comp 下都是一些组件，组件建议都是匿名方式 define
    release: '/static/$0'
});

fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'amd',
        useInlineMap: true // 资源映射表内嵌
    })
})

// fis3 release prod 产品发布，进行合并
fis.media('prod')
    .match('*.js', {
        packTo: '/static/aio.js'
    });