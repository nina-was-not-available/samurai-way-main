import React, {ChangeEvent} from 'react';
import classes from './common.module.css'

type EditableSpanPT = {
    title: string | null
    someThunk: (status: string) => Promise<void>
}

class EditableSpan extends React.Component <EditableSpanPT>{

    state = {
        editMode: false,
        title: this.props.title
    }

    componentDidUpdate(prevProps: Readonly<EditableSpanPT>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.title !== prevProps.title) {
            this.setState({
                title: this.props.title
            })
        }
    }

    onDoubleClickHandler = () => {
        this.setState({
            editMode: true,
        })
    }
    onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            title: event.currentTarget.value
        })
    }

    onBlurHandler = () => {
        this.setState({
            editMode: false
        })
        this.props.someThunk(this.state.title? this.state.title : '')
    }

    render() {
        let status = this.props.title
        return (
            <div style={{marginTop: '10px'}}>
                Status:
                {!this.state.editMode ? <div>
                        <span onDoubleClick={this.onDoubleClickHandler}>{status ? status : '#nostatus'}</span>
                    </div>
                    : <div>
                        <input
                            value={this.state.title? this.state.title : ''}
                            onChange={this.onChangeHandler} autoFocus
                            onBlur={this.onBlurHandler} className={classes.input}
                            placeholder={'Write something...'}
                        />
                    </div>}
            </div>
        );
    }
}

export default EditableSpan;