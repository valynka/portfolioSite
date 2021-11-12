import React from "react";
import GalleryNav from "./GalleryNav";

class Photo extends React.Component {
    state = {
        uiState: {
            chosenType: 'landscape',
        },
        data: {
            tabs: [{ tabId: 'landscape', name: 'Пейзаж' }, { tabId: 'flip', name: 'Флип' },],
        },
    };

    changeTypeHandler = (type) => () => {
       this.setState({uiState: {chosenType: type}});
    };

    render () {
        const { chosenType } = this.state.uiState;
        const { tabs } = this.state.data;
        return (
            <section>
		        <div className="container-xl">
			        <h2>Фотография</h2>
                    <GalleryNav type={chosenType} tabs={tabs} changeTypeHandler={this.changeTypeHandler} />
                </div>
            </section>
        );
    }
}

export default Photo;