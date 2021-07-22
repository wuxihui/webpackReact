import React from 'react'
import './index.less'

export default class Header extends React.Component {
    render(){
        return (
            <div className="public-head">
                {this.props.name}
            </div>
        )
    }
}