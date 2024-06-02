import cn from 'classnames';

import {Component} from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			increase: false,
			like: false
		};
	}

	onIncrease = () => {
		this.setState(({increase}) => ({
			increase: !increase
		}));
	}

	onRise = () => {
		this.setState(({like}) => ({
			like: !like
		}));
	}
	
	render() {
		const {name, salary} = this.props;
		const {increase, like} = this.state;

		const classNames =  cn({
			'list-group-item': true,
			'd-flex': true,
			'justify-content-between': true,
			increase,
			like
		});
		
		/* let classNames = 'list-group-item d-flex justify-content-between';
		if (increase) {
			classNames += ' increase';
		}

		if (like) {
			classNames += ' like';
		} */
		
		
		return (
			<li className={classNames}>
				<span className='list-group-item-label' onClick={this.onRise}>{name}</span>
				<input
					type="text"
					defaultValue={salary + '$'}
					className="list-group-item-input"/>
				<div className="d-flex justify-content-center slign-items-center">
					<button type="button" className="btn-cookie btn-sm" onClick={this.onIncrease}>
						<i className="fas fa-cookie"></i>
					</button>
	
					<button type="button" className="btn-trash btn-sm">
						<i className="fas fa-trash"></i>
					</button>
	
					<i className="fas fa-star"></i>
				</div>
			</li>
		);
	};
}

export default EmployeesListItem;