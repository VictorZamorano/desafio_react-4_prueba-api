import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MiApi from "./MiApi";
import Img from "./Img";
import celebi from "../../../public/celebi-santuary.jpg";
import gif from "../../../public/ash.gif";
import pokemon from "../../../public/pokemon.png";
import Footer from "./Footer";

const Index = () => {
	return (
		<div>
			<Header
				classN={
					"bg-dark sticky-top d-flex justify-content-around align-items-center header"
				}
				img1={gif}
				img1Alt={"ash"}
				img2={pokemon}
				img2Alt={"pokemon"}
			></Header>
			<Img
				classImgContainer={"celebiBg"}
				img={celebi}
				imgAlt={"celebi"}
				classContet={"content"}
				classNOverlay={"overlay"}
				textH2={"¡Hola entrenador!"}
				classNh2={"fs-1"}
				textP={
					"Abajo encontraras una lista con pokemons iniciales para tus aventuras"
				}
				classNp={"fs-3"}
			></Img>
			<div className="w-50 mx-auto">
				<MiApi
					containerMiapi={"border border-warning mb-4 mt-4"}
					text={"Pokemons"}
					containerTittle={"d-flex justify-content-around mt-2 mb-2"}
					classNInput={"form-control w-50"}
					placeholder={"¿Buscas alguno en especifico?"}
					containerList={"text-start containerList"}
					classNU={"list-group list-group-flush border"}
					classNL={
						"list-group-item list-group-item-action d-flex justify-content-around align-items-center"
					}
					textA={"Informacion por generaciones"}
				></MiApi>
			</div>
			<Footer
				classFooter={"bg-dark text-white"}
				classNp={"fs-5 text-center p-2 m-0"}
			></Footer>
		</div>
	);
};

export default Index;
