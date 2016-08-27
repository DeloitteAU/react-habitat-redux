/**
 * Copyright 2016-present, Deloitte Digital.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ReactHabitat 		from 'react-habitat';
import { createStore } 		from 'redux';

import Container			from '../src/Container';

import mochReducer	 		from './mochs/mochReducer';
import MochContainer 		from './mochs/MochContainer';


let node = null;

describe('Bootstrapper', () => {

	class App extends ReactHabitat.Bootstrapper {

		constructor() {
			super();

			const store = createStore(mochReducer);

			const container = new Container(store);
			container.registerComponent('IMochContainer', MochContainer);

			this.setContainer(container);
		}

	}

	beforeEach(() => {
		node = document.createElement('div');
		window.document.body.appendChild(node);
	});

	afterEach(() => {
		window.document.body.removeChild(node);
	});

	it('should render a component', () => {
		node.innerHTML = '<div data-component="IMochContainer"></div>';

		const app = new App();
		const componentLookup = node.innerHTML.match(/\[component MochComponent\]/g);

		expect(app).toBeDefined();
		expect(componentLookup).not.toEqual(null);
		expect(componentLookup.length).toEqual(1);
	});


	it('should update on provider changes', () => {
		node.innerHTML = '<div data-component="IMochContainer"></div>';

		const app = new App();
		const componentLookup = node.innerHTML.match(/\[component MochComponent\]/g);
		const countBtn = document.getElementById('countBtn');

		expect(app).toBeDefined();
		expect(componentLookup).not.toEqual(null);
		expect(componentLookup.length).toEqual(1);
		expect(countBtn.innerText).toBe('0');

		countBtn.click();
		expect(countBtn.innerText).toBe('1');

		countBtn.click();
		expect(countBtn.innerText).toBe('2');

		countBtn.click();
		countBtn.click();
		expect(countBtn.innerText).toBe('4');

	});

	it('should pass own props', () => {
		node.innerHTML = '<div data-component="IMochContainer" data-prop-prefix="BRAVO-"></div>';

		const app = new App();
		const componentLookup = node.innerHTML.match(/\[component MochComponent\]/g);
		const countBtn = document.getElementById('countBtn');

		expect(app).toBeDefined();
		expect(componentLookup).not.toEqual(null);
		expect(componentLookup.length).toEqual(1);
		expect(countBtn.innerText).toBe('BRAVO-0');

		countBtn.click();
		expect(countBtn.innerText).toBe('BRAVO-1');

		countBtn.click();
		expect(countBtn.innerText).toBe('BRAVO-2');

		countBtn.click();
		countBtn.click();
		expect(countBtn.innerText).toBe('BRAVO-4');

	});

});
