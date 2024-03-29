import TextInput from '../components/textInput';
import Loader from '../components/UI/loader';
import SelectInput from '../components/selectInput';
import MainButton from '../components/mainButton';
import triangles from '../public/svg/triangles.svg';
import loadupSvg from '../public/svg/loadup.svg';
import styles from './trade.module.scss';
import Head from 'next/head';
import Link from 'next/link';

class Trade extends React.Component {
	state = {
		formData: {
			symbol: '',
			symbolIsValid: false,
			amount: '',
			amountIsValid: false,
			formIsValid: false,
			error: ''
		},
		success: false,
		loading: false,
		availableAssets: [
			{ text: 'Tesla', value: 'TSLA' },
			{ text: 'Bitcoin', value: 'BTC' }
		]
	};

	changeHandler = (event) => {
		this.setState({
			...this.state,
			formData: {
				...this.state.formData,
				[event.target.name]: event.target.value
			}
		});
	};

	buttonClicked = (event) => {
		this.setState({
			...this.state,
			loading: true
		});
		event.preventDefault();
		setTimeout(() => {
			console.log('inside timeout');
			this.setState({
				...this.state,
				loading: false,
				success: true
			});
		}, 3000);
		console.log('button clicked', this.state.formData);
	};

	selectChangeHandler = (event) => {
		this.setState({
			...this.state,
			formData: {
				...this.state.formData,
				symbol: event.target.value
			}
		});
	};

	render() {
		let button = <MainButton clicked={this.buttonClicked}>Comprar</MainButton>;

		if (this.state.loading) {
			button = <Loader />;
		}
		if (this.state.success) {
			button = <h2>¡Orden creada exitosamente!</h2>;
		}
		const cardCss =
			'p-4 mt-5 shadow w-full  md:max-w-md mx-auto form-container';
		return (
			<>
				<div className={styles.container}>
					<Head>
						<title>¡Invierte en acciones con Loadup!</title>
					</Head>
					<div className={styles.landing}>
						<img src={triangles} />
					</div>
					<div className={styles.logo}>
						<img className='twitter  shadow-2xl ' src={loadupSvg} alt='logo' />
					</div>
					<div className={cardCss}>
						<form className='inside-container'>
							{/* <TextInput
							onChangeHandler={this.changeHandler}
							value={this.state.formData.symbol}
							type='text'
							label='Activo'
							name='symbol'
							minLength='3'
							maxLength='6'
							disabled
						/> */}
							<SelectInput
								label='Activo'
								options={this.state.availableAssets}
								defaultValue={this.state.formData.marketType}
								onChangeHandler={this.selectChangeHandler}
							/>
							<TextInput
								onChangeHandler={this.changeHandler}
								value={this.state.formData.amount}
								type='text'
								placeholder='10.000'
								label='Monto (mínimo 10.000 COP)'
								name='amount'
								minLength='1'
							/>
							{button}
						</form>
					</div>
					{/* <div className={cardCss}>Reclama 10.000 COP gratis</div> */}

					{/* <div className='mx-auto p-4 p-4 shadow w-full  md:max-w-md mx-auto'>
					<h2>Escoge un activo</h2>
					<div>
						<div className='input'>{}</div>
					</div>
					<ul>
						{this.state.availableAssets.map((asset) => {
							return <li>{asset.name}</li>;
						})}
					</ul>
				</div> */}
				</div>
				<div className={styles.back}>
					<Link href='/'>
						<a>Volver al Inicio</a>
					</Link>
				</div>
			</>
		);
	}
}

export default Trade;
