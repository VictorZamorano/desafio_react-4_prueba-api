const Header = ({ classN, img1, img1Alt, img2, img2Alt, span }) => {
	return (
		<div className={classN}>
			<img className="img1" href="#" src={img1} alt={img1Alt} />
			<img className="img2" src={img2} alt={img2Alt} />
			<span className={span}>Lorem, ipsum dolor.</span>
		</div>
	);
};

export default Header;
