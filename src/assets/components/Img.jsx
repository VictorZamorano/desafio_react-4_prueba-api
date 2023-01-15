const Img = ({
	classImgContainer,
	classContet,
	classNOverlay,
	textH2,
	textP,
	img,
	imgAlt,
	classNh2,
	classNp,
}) => {
	return (
		<div className={classImgContainer}>
			<img src={img} alt={imgAlt} />
			<div className={classNOverlay}>
				<div className={classContet}>
					<h2 className={classNh2}>{textH2}</h2>
					<p className={classNp}>{textP}</p>
				</div>
			</div>
		</div>
	);
};

export default Img;
