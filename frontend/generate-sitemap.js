const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

(async () => {
    const baseUrl = 'https://mhtcetcollege-predictor.vercel.app';

    const staticPages = [
        '/',
        '/predictor'
        // Add more static pages if needed
    ];

    const dynamicColleges = [
        'government-college-of-engineering-amravati',
        'vjti-mumbai',
        'coep-technological-university'
        // Add your slugs here
    ];

    const sitemapStream = new SitemapStream({ hostname: baseUrl });

    const links = [
        ...staticPages.map(page => ({ url: page, changefreq: 'weekly', priority: 1.0 })),
        ...dynamicColleges.map(slug => ({ url: `/college/${slug}`, changefreq: 'weekly', priority: 0.8 }))
    ];

    links.forEach(link => sitemapStream.write(link));
    sitemapStream.end();

    const sitemapData = await streamToPromise(sitemapStream);

    fs.writeFileSync('./public/sitemap.xml', sitemapData.toString());

    console.log('✅ Sitemap generated successfully at /public/sitemap.xml');
})();
