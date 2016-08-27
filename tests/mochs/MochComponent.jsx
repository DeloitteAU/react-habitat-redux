/**
 * Copyright 2016-present, Deloitte Digital.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React from 'react';

class MochComponent extends React.Component {

	render() {

		const { value, onIncrement, prefix } = this.props;

		return (
			<div>
				<span>[component MochComponent]</span>
				<button id="countBtn" onClick={onIncrement}>{prefix}{value}</button>
			</div>
		);
	}
}

MochComponent.defaultProps = {
	prefix: null,
};

MochComponent.propTypes = {
	value: React.PropTypes.number.isRequired,
	onIncrement: React.PropTypes.func.isRequired,
	prefix: React.PropTypes.string,
};

export default MochComponent;
