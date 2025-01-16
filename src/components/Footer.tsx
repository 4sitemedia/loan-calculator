const Footer = (): React.JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="mb-2 mx-4">
        &copy; {year} 4SiteMedia LLC. All Rights Reserved.
      </footer>
    </>
  );
};

export default Footer;
