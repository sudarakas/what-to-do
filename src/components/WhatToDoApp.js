import React from 'react';

import AddOption from './AddOption';
import { Header } from './Header';
import { Footer } from './Footer';
import { Action } from './Action';
import { Options } from './Options';
import OptionModal from './OptionModal';

export default class WhatToDoApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined,
    }

    //Fetch the content from the local storage
    componentDidMount() {
        try {
            const jsonOptions = localStorage.getItem('options');
            const optionObject = JSON.parse(jsonOptions);
            if (optionObject) {
                this.setState({
                    options: optionObject,
                });
            }
        } catch (error) {
            console.log(error)
        }
    }

    //Add the updated data to local storage
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const jsonOptions = JSON.stringify(this.state.options);
            localStorage.setItem('options', jsonOptions);
        }
    }

    //updateOptionList
    handleAddOption = (option) => {

        //If the form is empty
        if (!option) return 'Enter valid task to add task';

        //If task is alread exists on the list
        if (this.state.options.indexOf(option) > -1) return 'This task is already exists';

        //Add the task to the list
        this.setState({
            options: [...this.state.options, option]
        })
    }

    handleRemoveAll = () => {
        this.setState({
            options: []
        });
    }

    handleRemoveOption = (option) => {
        this.setState((prevState) => (
            {
                options: prevState.options.filter((element) => element !== option)
            }));
    }

    hanldeTaskSelect = () => {
        const randomNumber = Math.floor(Math.random() * Math.floor(this.state.options.length));
        this.setState({
            selectedOption: this.state.options[randomNumber],
            setIsOpen: true,
        })
    }

    handleCloseModal = () => {
        this.setState({
            selectedOption: undefined,
        })
    }

    render() {
        const title = "What TO Do App - ReactJs";
        const subtitle = "Let us remember the task";
        return (
            <div>
                <Header
                    title={title}
                    subtitle={subtitle}
                />
                <div className="container">
                    <Action
                        numTask={this.state.options.length}
                        hanldeTaskSelect={this.hanldeTaskSelect}
                    />
                    <div className="widget">
                    <Options
                        options={this.state.options}
                        handleRemoveOption={this.handleRemoveOption}
                        handleRemoveAll={this.handleRemoveAll}
                    />
                    <AddOption handleAddOption={this.handleAddOption} />

                    </div>
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        handleCloseModal={this.handleCloseModal}
                    />
                </div>
                <Footer
                    title={title}
                    subtitle={subtitle}
                />
            </div>
        )
    }
}