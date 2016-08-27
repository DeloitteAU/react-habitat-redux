/**
 * Copyright 2016-present, Deloitte Digital.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IContainer, IDomFactory }	from 'react-habitat';

export interface IReduxContainer extends IContainer {

	constructor: (store: any) => IReduxContainer;

}


declare module ReduxHabitat {

	export class Container implements IReduxContainer {

		/**
		 * The container id
		 */
		id: () => string;

		/**
		 * Register a component
		 */
		registerComponent: (name: string, comp: any) => void;

		/**
		 * Resolve a component
		 */
		resolve: (name: string) => any;

		/**
		 * The containers dom factory
		 */
		domFactory: () => IDomFactory;
	}

}

export default ReduxHabitat;
