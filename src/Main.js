import React, { Component } from 'react'
import Login from './Login'
import Section from './Section'


class Main extends Component {


    render() {

        let section;
        switch (this.props.active) {
            default:
            case 0:
                section = (
                    <main>
                        <Section title="Inicio">
                            Esta es la sección de inicio
                            <Login login={this.props.login}/>
                        </Section>
                    </main>
                );
                break;
            case 1:
                section = (
                    <main>
                        <Section title="Ayuda">
                            Esta es la sección de ayuda
                        </Section>
                    </main>
                );
                break;
            case 2:
                section = (
                    <main>
                        <Section title="Nuevo examen">
                            Esta es la sección para crear un nuevo examen
                            </Section>
                    </main>
                );
                break;
            case 3:
                section = (
                    <main>
                        <Section title="Listar exámenes">
                            Esta es la sección para listar exámenes
                                </Section>
                    </main>
                );
                break;

        }
        return (
            <main>
                {section}
            </main>
        );
    }




}

export default Main;