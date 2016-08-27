/**
 * Copyright 2016-present, Deloitte Digital.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import ReactHabitat		from 'react-habitat';
import ReduxDomFactory	from './ReduxDomFactory';

export default class Container extends ReactHabitat.Container {
	constructor(store) {
		super();
		this._factory = new ReduxDomFactory(store);
	}

	domFactory() {
		return this._factory;
	}
}
