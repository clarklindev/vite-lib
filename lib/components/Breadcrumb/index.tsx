import { Link } from 'react-router-dom';

//https://example.com/products/shoes/nike
//lconsole.log(location.pathname); ->  Output: "/products/shoes/nike"

type BreadcrumbType = {
    path: string;
};

const Breadcrumb = ({ path }: BreadcrumbType) => {
    let currentLink = '';

    const crumbs = path
        .split('/')
        .filter((crumb) => crumb.trim() !== '')
        .map((crumb, index, array) => {
            currentLink += `/${crumb}`;

            const isLast = index === array.length - 1;

            return (
                <span className="flex items-center" key={currentLink}>
                    <Link to={currentLink} className={`text-blue-600 hover:underline ${isLast ? 'font-semibold' : ''}`}>
                        {/* decodeURIComponent(crumb) -> decodes any URL-encoded characters (e.g., %20 becomes a space, %C3%A9 becomes é). */}
                        {/* replace - with ' ' */}
                        {/* capitalizes the first letter of each word */}
                        {/* \b -> word boundary ensures first letter of each word */}
                        {/* \w -> matches first letter of each word */}
                        {/* function (c) => c.toUpperCase() transforms that letter to uppercase. */}
                        {decodeURIComponent(crumb)
                            .replace(/-/g, ' ')
                            .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </Link>
                    {!isLast && <span className="mx-2 text-gray-500">/</span>}
                </span>
            );
        });

    return <nav className="breadcrumbs flex space-x-1">{crumbs}</nav>;
};

export { Breadcrumb };
