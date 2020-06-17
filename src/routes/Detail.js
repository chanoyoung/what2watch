import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { state } = this.props.location;
        if (state) {
            return <span>{state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;
