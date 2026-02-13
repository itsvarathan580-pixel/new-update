import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    noindex?: boolean;
}

const SEO = ({
    title,
    description = "LIONYX TECHNOLOGIES - Professional Web Design & Development Agency. We build high-ranking websites for businesses.",
    keywords = "web developer, build website, create website, website maker, web design company, seo services, business website",
    image = "/winfly-taxi.png", // Using a default image from public folder
    url,
    type = "website",
    noindex = false
}: SEOProps) => {
    const siteUrl = "https://itsvarathan.in";
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title} | LIONYX TECHNOLOGIES</title>
            <meta name="description" content={description} />
            {noindex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="keywords" content={keywords} />
            )}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
        </Helmet>
    );
};

export default SEO;
