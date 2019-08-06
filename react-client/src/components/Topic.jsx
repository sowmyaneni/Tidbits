import React from 'react';
import $ from 'jquery';

class Topic extends React.Component {
	constructor(props) {
		super(props);
		this.getAnswer = this.getAnswer.bind(this);
	}

	getAnswer() {
		$.ajax({
			url: this.props.url,
			method: 'GET',
			contentType: 'application/json',
			success: (data) => {
				this.props.updateAnswer(data);
			},
			error: (err) => {
				console.log('Failed GET Request', err);
			}
		});
	}

	render() {
		return (
			<div>
        <button type="button" onClick={this.getAnswer}>HELP ME</button>
			  <p>{this.props.children}</p>
      </div>
		);
	}
}

export default Topic;
