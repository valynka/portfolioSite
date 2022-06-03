import _ from "lodash";
import React from "react";
import cn from 'classnames';

class Education extends React.Component {
    state = {
        uiState: {
            accordionShown: false,
        }
    }

    collapsingHandler = () => {
        const { accordionShown } = this.state.uiState;
        this.setState({uiState: {accordionShown: !accordionShown}});
    }

    render() {
        const { edList } = this.props;
        const { accordionShown } = this.state.uiState;
        const buttonClasses = cn('accordion-button', {
            'collapsed': !accordionShown,
        });
        const accodionBodyClasses = cn({
            'accordion-collapse': true,
            'collapse':true,
            'show': accordionShown,
        });

        return (
            <div className="accordion accordion-flush education">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className={buttonClasses} onClick={this.collapsingHandler} type="button">
                        Образование
                    </button>
                    </h2>
                    <div className={accodionBodyClasses}>
                        <div className="accordion-body">
                            <table className="table">
                                <tbody>
                                    {edList.map((edItem) => 
                                        <tr key={_.uniqueId()}>
                                            <td>{edItem.title}
                                                <p className="text-sm">{edItem.institution}</p>
                                            </td>
                                            <td>{edItem.period}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;