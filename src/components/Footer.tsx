const Footer = (): React.JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="mx-4 mb-2">
        &copy; {year} 4SiteMedia LLC. All Rights Reserved.
      </footer>
    </>
  );
};

export default Footer;
