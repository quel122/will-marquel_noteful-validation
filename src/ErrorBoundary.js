import React from 'react';

export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error">
                    Something went wrong!
                </div>
            )
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}