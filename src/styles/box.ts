// Packages
import merge from 'lodash.merge';

// Ours
import { styleName } from './utils/styleName';

const justifyContent = () => {
	const center = {
		'justify-center': {
			justifyContent: 'center',
		},
	};

	const startEnd = ['start', 'end']
		.map((value) => ({
			[styleName('justify', value)]: {
				justifyContent: 'flex-' + value,
			},
		}))
		.reduce(merge, {});

	const space = ['between', 'around', 'evenly']
		.map((value) => ({
			[styleName('justify', value)]: {
				justifyContent: 'space-' + value,
			},
		}))
		.reduce(merge, {});

	return [center, startEnd, space].reduce(merge, {});
};

const alignContent = () => {
	const centerStretch = ['stretch', 'center']
		.map((value) => ({
			[styleName('content', value)]: {
				alignContent: value,
			},
		}))
		.reduce(merge, {});

	const startEnd = ['start', 'end']
		.map((value) => ({
			[styleName('content', value)]: {
				alignContent: 'flex-' + value,
			},
		}))
		.reduce(merge, {});

	const space = ['between', 'around']
		.map((value) => ({
			[styleName('content', value)]: {
				alignContent: 'space-' + value,
			},
		}))
		.reduce(merge, {});

	return [centerStretch, startEnd, space].reduce(merge, {});
};

const alignItems = () => {
	const startEnd = ['start', 'end']
		.map((value) => ({
			[styleName('items', value)]: {
				alignItems: 'flex-' + value,
			},
		}))
		.reduce(merge, {});

	return ['baseline', 'stretch', 'center']
		.map((value) => ({
			[styleName('items', value)]: {
				alignItems: value,
			},
		}))
		.reduce(merge, startEnd);
};

const alignSelf = () => {
	const startEnd = ['start', 'end']
		.map((value) => ({
			[styleName('self', value)]: {
				alignSelf: 'flex-' + value,
			},
		}))
		.reduce(merge, {});

	return ['auto', 'stretch', 'center']
		.map((value) => ({
			[styleName('self', value)]: {
				alignSelf: value,
			},
		}))
		.reduce(merge, startEnd);
};

export default () => ({
	...justifyContent(),
	...alignContent(),
	...alignItems(),
	...alignSelf(),
});