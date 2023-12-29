// App paths

export const pathsPublic: { [keyof: string]: string } = {
  home: "/",
  productDetails: "/product/:idOrSlug",
};

export const pathsPrivate: { [keyof: string]: string } = {
  acountSettings: "/account-settings",
};

export const paths: { [keyof: string]: string } = Object.assign(
  {},
  pathsPublic,
  pathsPrivate
);

// Check if pathname matches to one given key from paths

export const checkPathMatch = (
  pathname: string,
  paths: { [keyof: string]: string }
) => {
  let isMatch = false;

  const allPaths = Object.keys(paths).map((k) => paths[k]);
  const pathFirstSection = pathname.split("/")[1];

  allPaths.forEach((p) => {
    if (p.slice(1) === pathFirstSection) {
      isMatch = true;
    }
  });
  return isMatch;
};
