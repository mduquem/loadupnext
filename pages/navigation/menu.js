const MenuPage = () => {
	return <h1>Hello Wotlds</h1>;
};

export default MenuPage;

export async function getStaticProps(context) {
	console.log('CONTEZT', context);
	return {
		props: {}
	};
}
