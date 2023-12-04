import React, {ChangeEvent} from 'react';
import classes from './common.module.css'

type EditableSpanPT = {
    title: string | null
}

class EditableSpan extends React.Component<EditableSpanPT> {
    state = {
        editMode: false,
        title: this.props.title
    }

    onDoubleClickHandler = () => {
        this.setState({
            editMode: true,

        })
    }
    onBlurHandler =  ()  => {
        this.setState({
            editMode: false
        })
    }
    onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>  {
        this.setState({
            title: event.currentTarget.value
        })
    }
    render() {
        return (
            <div style={{marginTop: '10px'}}>
                {!this.state.editMode ? <div>
                        <span onDoubleClick={this.onDoubleClickHandler}>{this.state.title}</span>
                    </div>
                    : <div>
                        <input value={this.state.title ? this.state.title : ''} onChange={this.onChangeHandler} autoFocus
                               onBlur={this.onBlurHandler} className={classes.input}/>
                    </div>}
            </div>
        );
    }
}

export default EditableSpan;