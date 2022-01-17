const { Link, useSearchParams } = require("react-router-dom");

function BrandLink({ brand, ...props }) {
    let [params] = useSearchParams();
    let isActive = params.getAll("brand").includes(brand);
    return (
      <Link
        style={{ color: isActive ? "red" : "" }}
        to={`/shoes?brand=${brand}`}
        {...props}
      />
    );
  }

  function BrandLinkOne({ brand, ...props }) {
    let [params] = useSearchParams();
    let brands = params.getAll("brand");
    let isActive =
      brands.includes(brand) && brands.length === 1;
    return (
      <Link
        style={{ color: isActive ? "red" : "" }}
        to={`/shoes?brand=${brand}`}
        {...props}
      />
    );
  }

/*   <Link to="/shoes?brand=nike">Nike</Link>
<Link to="/shoes?brand=vans">Vans</Link> */