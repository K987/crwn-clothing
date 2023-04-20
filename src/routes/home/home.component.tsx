import Directory from "../../components/directory/directory.component";

export type Category = {
	id: number,
	title: string,
	imageUrl: string,
};

const Home = () => {

	return (
		<Directory />
	);
}

export default Home;
