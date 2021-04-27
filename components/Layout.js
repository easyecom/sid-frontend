import Head from './Head';

import Style from './Style';

const Layout = ({ children, productName, description, url, image }) => ( // mudei de title para productName
    <div>
        <Head
            productName={productName} // mudei de title para productName | LASTCHANGE
            description={description}
            url={url}
            ogImage={image}></Head>
        <Style />
        <div className="body">
            {children}
        </div>
        <footer>
            <div className="flex flex-center">
                <small>
                    &copy; Loja Sid Surf Store
                </small>
            </div>
        </footer>
    </div>
);

export default Layout;