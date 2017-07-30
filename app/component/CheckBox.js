import React from 'react';
import {Image, TouchableOpacity} from 'react-native';


export default class CheckBox extends React.Component {
    static defaultProps = {
        onChange: false,
    }

    static propTypes = {
        checked: React.PropTypes.bool,
        onChange: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: nextProps.checked
        });
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => {
                this.imgClick()
            }}>
                <Image
                    source={this.state.checked
                        ? require("../resource/img/new_check.png") : require("../resource/img/new_uncheck.png")}
                    style={{width: 15, height: 15}}/>
            </TouchableOpacity>
        );
    }

    imgClick() {
        let currentChecked = !this.state.checked;
        if (this.props.onChange) {
            this.props.onChange(currentChecked);
        }
        this.setState({
            checked: currentChecked
        });
    }

    isChecked() {
        return this.state.checked;
    }
};