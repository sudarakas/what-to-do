import React from 'react';

class AddOption extends React.Component {

    state = {
        error: undefined,
    }

    handleAddOption = (e) => {
        e.preventDefault();

        //Get the form val and trim
        const option = e.target.elements.option.value.trim();

        //Clear the form inout
        e.target.elements.option.value = ''
        //Get the error values
        const error = this.props.handleAddOption(option);
        //Set the error message
        this.setState(() => ({ error: error }));
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <div>
                    <form className="add-option" onSubmit={this.handleAddOption}>
                        <input className="add-option__input" type="text" name="option" placeholder="Add new task"></input>
                        <button className="button">Add Task</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddOption;