import { Breadcrumb } from 'lib/components';

//example: https://example.com/products/shoes/nike

//import { useLocation, Link } from 'react-router-dom';
//const location = useLocation();
//console.log(location.pathname); ->  Output: "/products/shoes/nike"
const pathname = '/products/shoes/nike';

const BreadcrumbExample = () => {
    return <Breadcrumb path={pathname} />;
};

export default BreadcrumbExample;
